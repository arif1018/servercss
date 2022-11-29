const payorModel = require("../models/payorModel");

const addPayorData = async (req, res) => {
  const payorData = await payorModel.create(req.body);
  res.status(200).json(payorData);
};

const getPayorData = async (req, res) => {
  const payorData = await payorModel.find();
  res.status(200).json(payorData);
};

module.exports = { addPayorData, getPayorData };
