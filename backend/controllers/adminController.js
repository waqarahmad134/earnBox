const moment = require("moment");
const { Op } = require("sequelize");
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


exports.addPackage = async (req, res, next) => {
  try {
    const { name, requirements, description, adsNo, earn, referralBonus, price, validity } = req.body;
    let packageData = new package();
    packageData.name = name;
    packageData.requirements = requirements;
    packageData.description = description;
    packageData.adsNo = adsNo;
    packageData.earn = earn;
    packageData.referralBonus = referralBonus;
    packageData.price = price;
    packageData.validity = validity;
    await packageData.save();
    return res.json(returnFunction("1", "Package added successfully", {}, ""));
  } catch (error) {
    console.error("Error adding package:", error);
    return res.json(returnFunction("0", "An error occurred", {}, ""));
  }
};

exports.getPackages = async (req, res, next) => {
  try {
    const packages = await package.findAll();
    return res.json(returnFunction("1", "Packages retrieved successfully", { packages }, ""));
  } catch (error) {
    console.error("Error fetching packages:", error);
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
    return res.json(returnFunction("1", "added successfully", {}, ""));
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
    return res.json(returnFunction("1", "updated successfully", {}, ""));
  } catch (error) {
    console.error("Error updating payment method:", error);
    return res.json(returnFunction("0", "An error occurred", {}, ""));
  }
};




