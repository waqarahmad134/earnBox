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
exports.addPaymentMethod = async (req, res, next) => {
  const { name, accountNo } = req.body;
  let data = new paymentMethod();
  data.name = name;
  data.accountNo = accountNo;
  await data.save();
  return res.json(returnFunction("1", "added successfully", {}, ""));
};
exports.updatePaymentMethod = async (req, res, next) => {
  const { id,name, accountNo } = req.body;
  let data = await paymentMethod.findOne({where:{id:id}});
  data.name = name;
  data.accountNo = accountNo;
  await data.save();
  return res.json(returnFunction("1", "updated successfully", {}, ""));
};
