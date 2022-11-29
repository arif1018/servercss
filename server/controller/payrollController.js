const payrollModel = require("../models/payrollModel.js");

const addPayRollData = async (req, res) => {
  const payRollData = await payrollModel.create(req.body);
  res.status(200).json(payRollData);
};

const getPayRollData = async (req, res) => {
  const payRollData = await payrollModel.find();
  res.status(200).json(payRollData);
};

module.exports = { addPayRollData ,getPayRollData};