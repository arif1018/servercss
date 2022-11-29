// const asyncHandler = require("express-async-handler")
const burdernGroupModel = require("../models/burdernGroupModel.js");

const addburdernGroupData = async (req, res) => {
  const burdernGroup = await burdernGroupModel.create(req.body);
  console.log(burdernGroup);
  res.status(200).json({ burdernGroup });
};

const getburdernGroupData = async (req, res) => {
  const burdernGroup = await burdernGroupModel.find();
  console.log(burdernGroup);
  res.status(200).json(burdernGroup);
};

module.exports = { addburdernGroupData, getburdernGroupData };
