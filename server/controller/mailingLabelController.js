// const asyncHandler = require("express-async-handler")
const mailingLabelModel = require("../models/mailingLabelModel")

const addmailingLabelData = async (req, res) => {
  const mailingLabel = await mailingLabelModel.create(req.body);
  console.log(mailingLabel)
  res.status(200).json(mailingLabel);  
};


const getmailingLabelData = async (req, res) => {
  const mailingLabel = await mailingLabelModel.find();
  console.log(mailingLabel)
  res.status(200).json(mailingLabel);  
};


module.exports = { addmailingLabelData ,getmailingLabelData};
