const registrantModel = require("../models/registrantModel");

const addregistrantData = async (req, res) => {
  const registrant = await registrantModel.create(req.body);
  console.log(registrant);
  res.status(200).json(registrant);
};

const getregistrantData = async (req, res) => {
  const registrant = await registrantModel.find();
  console.log(registrant);
  res.status(200).json(registrant);
};

module.exports = { addregistrantData, getregistrantData };
