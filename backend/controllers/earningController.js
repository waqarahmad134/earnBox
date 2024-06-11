const moment = require("moment");
const { Op } = require("sequelize");
const { sequelize } = require("sequelize");
const {
  paymentMethod,
  package,
  user,
  ad,
  earning,
  wallet,
  withdraw,
} = require("../models");
const appError = require("../utils/appError");
const { rmSync } = require("fs");

let returnFunction = (status, message, data, error) => {
  return {
    status: `${status}`,
    message: `${message}`,
    data: data,
    error: "",
  };
};
/*
            4. Get Packages
    ________________________________________
*/

exports.getPaymentMethods = async (req, res, next) => {
  try {
    let data = await paymentMethod.findAll({});
    return res.status(200).json({
      status: "1",
      message: `Payment methods`,
      data: {
        data,
      },
      error: "",
    });
  } catch (error) {
    return res.json(
      returnFunction(
        "0",
        `Error: ${error.message}`,
        null,
        "An error occurred while fetching payment methods."
      )
    );
  }
};

exports.getPackages = async (req, res, next) => {
  const allPackages = await package.findAll();
  return res.json(returnFunction("1", "All Packages", allPackages, ""));
};

exports.getUserDetails = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    let data = await user.findByPk(userId);
    return res.json(returnFunction("1", `User details of ${userId}`, data, ""));
  } catch {
    return res.json(returnFunction("0", "Server Issue", "", ""));
  }
};
/*
            4. Select Packages
    ________________________________________
*/
exports.selectPackage = async (req, res, next) => {
  const { userId, packageId, paymentMethodId } = req.body;
  let User = await user.findByPk(userId);
  User.packageId = packageId;
  User.paymentMethodId = paymentMethodId;
  if (!req.file) {
    return next(new appError("Please Upload Picture", 200));
  }
  User.paymentProof = req.file.path;
  await User.save();
  return res.json(returnFunction("1", "Package Buy Successfully!", {}, ""));
};

/*
            4. Get Ads of User
    ________________________________________
*/
exports.getUserAds = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let userData = await user.findOne({
      where: { id: userId },
      attributes: ["id", "paymentStatus"],
      include: { model: package },
    });

    let total = parseInt(userData?.package?.adsNo);

    // Get the IDs of ads that the user has already earned
    const earningAds = await earning.findAll({
      where: {
        userId: userId,
        createdAt: {
          [Op.gte]: today,
        },
      },
      attributes: ["adId"],
    });

    const earnedAdIds = earningAds.map((earning) => earning.get("adId"));
    let addData = await ad.findAll({
      where: {
        packageId: userData?.package?.id,
        id: { [Op.notIn]: earnedAdIds },
      },
      limit: total,
    });

    return res
      .status(200)
      .json(returnFunction("1", "All Packages", { addData, userData }, ""));
  } catch (error) {
    console.error("An error occurred:", error);
    return res.status(200).json(returnFunction("0", error, "", ""));
  }
};

/*
            4. watch Ad
    ________________________________________
*/
exports.watchAd = async (req, res, next) => {
  try {
    const { userId, adId } = req.body;
    const today = moment().startOf("day");
    const tomorrow = moment(today).add(1, "days");
    const watchAdToday = await earning.findOne({
      where: {
        userId: userId,
        adId: adId,
        createdAt: {
          [Op.between]: [today, tomorrow],
        },
      },
    });

    if (watchAdToday) {
      return res.json(
        returnFunction("0", "You've already traded today", null, "")
      );
    }

    let addData = await ad.findOne({
      where: { id: adId },
      include: { model: package },
    });

    todayEarningLimit = addData.package.earn;
    adsNo = addData.package.adsNo;
    amount = parseFloat(todayEarningLimit) / parseFloat(adsNo);

    const watchAd = await earning.create({
      amount,
      adId,
      userId,
    });

    let walletData = await wallet.findOne({ where: { userId: userId } });
    if (walletData) {
      walletData.totalEarnings =
        parseFloat(walletData.totalEarnings) + parseFloat(amount);
      walletData.availableBalance =
        parseFloat(walletData.availableBalance) + parseFloat(amount);
      await walletData.save();
    } else {
      let newWallet = new wallet();
      newWallet.userId = userId;
      newWallet.totalEarnings =
        parseFloat(newWallet.totalEarnings) + parseFloat(amount);
      newWallet.availableBalance =
        parseFloat(newWallet.availableBalance) + parseFloat(amount);
      await newWallet.save();
    }
    return res.json(
      returnFunction("1", "Trade Added Sucessfully", watchAd, "")
    );
  } catch (error) {
    console.error("An error occurred:", error);
    return res.json(returnFunction("0", error, null, error));
  }
};

exports.dashboard = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const startOfToday = moment().startOf("day").toDate();
    const endOfToday = moment().endOf("day").toDate();
    let todayEarning = await earning.sum("amount", {
      where: {
        userId: userId,
        createdAt: {
          [Op.between]: [startOfToday, endOfToday],
        },
      },
    });

    const totalEarning = await earning.sum("amount", {
      where: {
        userId: userId,
      },
    });

    const totalRefers = await user.count({
      where: {
        referBy: userId,
      },
    });

    const activeRefers = await user.findAll({
      where: {
        referBy: userId,
        paymentstatus: true,
      },
    });

    const availableBalance = await wallet.findOne({
      where: {
        userId: userId,
      },
    });

    return res.status(200).json(
      returnFunction(
        "1",
        "Earnings",
        {
          todayEarning: todayEarning,
          totalEarning,
          totalRefers,
          activeRefers,
          availableBalance,
        },
        ""
      )
    );
  } catch (error) {
    console.error("Error fetching earnings:", error);
    return res
      .status(200)
      .json(returnFunction("0", error.message, null, error.message));
  }
};

exports.withdrawRequest = async (req, res, next) => {
  try {
    const { userId, amount, accountNo } = req.body;
    let walletData = await wallet.findOne({ userId: userId });
    if (walletData) {
      let withdrawData = new withdraw();
      withdrawData.accountNo = accountNo;
      withdrawData.amount = amount;
      withdrawData.status = true;
      withdrawData.userId = userId;
      withdrawData.save().then(async (dat) => {
        walletData.availableBalance =
          parseFloat(walletData.availableBalance) - parseFloat(amount);
        await walletData.save();
        return res
          .status(200)
          .json(
            returnFunction(
              "1",
              "Withdraw request created successfully",
              null,
              {}
            )
          );
      });
    } else {
      return res
        .status(500)
        .json(returnFunction("0", "Wallet not created", null, "Error"));
    }
  } catch (error) {
    console.error("Error fetching earnings:", error);
    return res
      .status(200)
      .json(returnFunction("0", error.message, null, error.message));
  }
};
exports.getWithdraw = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    let history = await withdraw.findAll({ where: { userId: userId } });
    return res.status(200).json(returnFunction("1", "", { history }, ""));
  } catch (error) {
    console.error("Error fetching earnings:", error);
    return res
      .status(500)
      .json(returnFunction("0", error.message, null, error.message));
  }
};
exports.getEarningHistory = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    let history = await earning.findAll({ where: { userId: userId } });
    return res.status(200).json(returnFunction("1", "", { history }, ""));
  } catch (error) {
    console.error("Error fetching earnings:", error);
    return res
      .status(200)
      .json(returnFunction("0", error.message, null, error.message));
  }
};

exports.updateUserDetails = async (req, res, next) => {
  try {
    const { userId, city, address, dateOfBirth, gender, zip, cnic } = req.body;
    let userToUpdate = await user.findByPk(userId);

    if (!userToUpdate) {
      return res
        .status(404)
        .json(returnFunction("0", "User not found", null, {}));
    }
    userToUpdate.city = city;
    userToUpdate.address = address;
    userToUpdate.dateOfBirth = dateOfBirth;
    userToUpdate.gender = gender;
    userToUpdate.zip = zip;
    userToUpdate.cnic = cnic;
    await userToUpdate.save();
    return res
      .status(200)
      .json(returnFunction("1", "User updated successfully", null, {}));
  } catch (error) {
    console.error("Error updating user:", error);
    return res
      .status(500)
      .json(returnFunction("0", error.message, null, error.message));
  }
};
