// const asyncHandler = require("express-async-handler")
const holidayModel = require("../models/holidayModel");

const addholidaData = async (req, res) => {
  const holiday = await holidayModel.create(req.body);
  console.log(holiday);
  res.status(200).json({ holiday });
};

const getholidaData = async (req, res) => {
  const holiday = await holidayModel.find();
  console.log(holiday);
  res.status(200).json(holiday);
};

module.exports = { addholidaData, getholidaData };
