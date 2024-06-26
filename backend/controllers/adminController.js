const moment = require("moment");
const { Op, where } = require("sequelize");
const { package, user, ad, paymentMethod } = require("../models");
const appError = require("../utils/appError");

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
exports.allUsers = async (req, res, next) => {
  try {
    const users = await user.findAll();
    return res.json(returnFunction("1", "All Users", { data: users }, ""));
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.json(returnFunction("0", "An error occurred", {}, ""));
  }
};

exports.updateStatus = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const userData = await user.findByPk(userId);

    if (!userData) {
      return res.json(returnFunction("0", "User not found", {}, ""));
    }

    await user.update({ status: !userData?.status }, { where: { id: userId } });

    return res.json(
      returnFunction("1", "User status updated successfully", {}, "")
    );
  } catch (error) {
    console.error("Error updating user status:", error);
    return res.json(
      returnFunction(
        "0",
        "An error occurred while updating user status",
        {},
        ""
      )
    );
  }
};

exports.updatePaymentStatus = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const userData = await user.findByPk(userId);

    if (!userData) {
      return res.json(returnFunction("0", "User not found", {}, ""));
    }

    await user.update({ paymentStatus: !userData?.paymentStatus }, { where: { id: userId } });

    return res.json(
      returnFunction("1", "User Payment Proof Updated Successfully", {}, "")
    );
  } catch (error) {
    console.error("Error updating user status:", error);
    return res.json(
      returnFunction(
        "0",
        "An error occurred while updating Payment Proof",
        {},
        ""
      )
    );
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const deletedUser = await user.destroy({ where: { id: userId } });

    if (deletedUser === 1) {
      return res.json(returnFunction("1", "User deleted successfully", {}, ""));
    } else {
      return res.json(returnFunction("0", "User not found", {}, ""));
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.json(
      returnFunction("0", "An error occurred while deleting user", {}, "")
    );
  }
};

exports.addPackage = async (req, res, next) => {
  try {
    const {
      name,
      requirements,
      description,
      adsNo,
      earn,
      price,
      validity,
      referalBonus,
      withdrawThreshold,
    } = req.body;
    tmpprofileImage = req.file ? req.file.path : "";
    const imagePath = tmpprofileImage.replace(/\\/g, "/");

    let packageData = new package();
    packageData.name = name;
    packageData.requirements = requirements;
    packageData.description = description;
    packageData.adsNo = adsNo;
    packageData.earn = earn;
    packageData.price = price;
    packageData.validity = validity;
    packageData.referalBonus = referalBonus;
    packageData.withdrawThreshold = withdrawThreshold;
    packageData.image = imagePath;
    await packageData.save();
    return res.json(returnFunction("1", "Package added successfully", {}, ""));
  } catch (error) {
    console.error("Error adding package:", error);
    return res.json(returnFunction("0", "An error occurred", {}, ""));
  }
};

exports.editPackage = async (req, res, next) => {
  try {
    const {
      id,
      name,
      requirements,
      description,
      adsNo,
      earn,
      price,
      validity,
      referalBonus,
      withdrawThreshold,
    } = req.body;
    tmpprofileImage = req.file ? req.file.path : "";
    const imagePath = tmpprofileImage.replace(/\\/g, "/");
    let packageData = await package.findOne({ where: { id: id } });
    packageData.name = name;
    packageData.requirements = requirements;
    packageData.description = description;
    packageData.adsNo = adsNo;
    packageData.earn = earn;
    packageData.price = price;
    packageData.validity = validity;
    packageData.referalBonus = referalBonus;
    packageData.withdrawThreshold = withdrawThreshold;
    if (req.file) {
      packageData.image = imagePath;
    }
    await packageData.save();
    return res.json(
      returnFunction("1", "Package updated successfully", {}, "")
    );
  } catch (error) {
    console.error("Error updating package:", error);
    return res.json(returnFunction("0", "An error occurred", {}, ""));
  }
};

exports.getPackages = async (req, res, next) => {
  try {
    const packages = await package.findAll();
    return res.json(
      returnFunction(
        "1",
        "Packages retrieved successfully",
        { data: packages },
        ""
      )
    );
  } catch (error) {
    console.error("Error fetching packages:", error);
    return res.json(returnFunction("0", "An error occurred", {}, ""));
  }
};

exports.getPaymentMethod = async (req, res, next) => {
  try {
    const data = await paymentMethod.findAll();
    return res.json(returnFunction("1", "All Payment Methods", { data }, ""));
  } catch (error) {
    console.error("Error fetching Payment Methods:", error);
    return res.json(returnFunction("0", "An error occurred", {}, ""));
  }
};



exports.addPaymentMethod = async (req, res, next) => {
  try {
    const { name, accountNo } = req.body;
    let data = new paymentMethod();
    data.name = name;
    data.accountNo = accountNo;
    await data.save();
    return res.json(returnFunction("1", "Payment Method Added successfully", {}, ""));
  } catch (error) {
    console.error("Error adding payment method:", error);
    return res.json(returnFunction("0", "An error occurred", {}, ""));
  }
};



exports.updatePaymentMethod = async (req, res, next) => {
  try {
    const { id, name, accountNo } = req.body;
    let data = await paymentMethod.findOne({ where: { id: id } });
    if (!data) {
      return res.json(returnFunction("0", "Payment method not found", {}, ""));
    }
    data.name = name;
    data.accountNo = accountNo;
    await data.save();
    return res.json(returnFunction("1", "Updated successfully", {}, ""));
  } catch (error) {
    console.error("Error updating payment method:", error);
    return res.json(returnFunction("0", "An error occurred", {}, ""));
  }
};





exports.deletePaymentMethod = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedUser = await paymentMethod.destroy({ where: { id: id } });

    if (deletedUser === 1) {
      return res.json(returnFunction("1", "Deleted successfully", {}, ""));
    } else {
      return res.json(returnFunction("0", "Not found", {}, ""));
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.json(
      returnFunction("0", "An error occurred while deleting", {}, "")
    );
  }
};


exports.getAllAds = async (req, res, next) => {
  try {
    const data = await ad.findAll({include: [{
      model: package,
      attributes: ['name'], // Specify which columns you want to include from the package table
    }],});
    return res.json(returnFunction("1", "All Ads", { data }, ""));
  } catch (error) {
    console.error("Error fetching Payment Methods:", error);
    return res.json(returnFunction("0", "An error occurred", {}, ""));
  }
};

exports.addNewAd = async (req, res, next) => {
  try {
    const { title, packageId } = req.body;
    const Package = await package.findByPk(packageId);
    const adCount = await ad.count({
      where: {
        packageId: packageId
      }
    });

    console.log(adCount)

    if (adCount >= Package.adsNo) {
      return res.json(returnFunction("0", "Maximum ads limit reached for this package", {}, ""));
    }

    let data = new ad();
    data.title = title;
    data.packageId = packageId;
    await data.save();
    return res.json(returnFunction("1", "Ad Created Successfully", {}, ""));
  } catch (error) {
    console.error("Error adding Ad:", error);
    return res.json(returnFunction("0", "An error occurred", {}, ""));
  }
};

exports.editAd = async (req, res, next) => {
  try {
    const { id, title, packageId } = req.body;
    let data = await ad.findOne({ where: { id: id } });
    if (!data) {
      return res.json(returnFunction("0", "Add Not found", {}, ""));
    }
    data.title = title;
    data.packageId = packageId;
    await data.save();
    return res.json(returnFunction("1", "Updated successfully", {}, ""));
  } catch (error) {
    console.error("Error updating Add:", error);
    return res.json(returnFunction("0", "An error occurred", {}, ""));
  }
};