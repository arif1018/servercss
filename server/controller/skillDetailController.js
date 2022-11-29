// const asyncHandler = require("express-async-handler")
const skillDetailModel = require("../models/skillDetailModel");

const addSkillDetailData = async (req, res) => {
  const skillDetail = await skillDetailModel.create(req.body);
  console.log(skillDetail);
  res.status(200).json(skillDetail);
};


const getSkillDetailData = async (req, res) => {
  const skillDetail = await skillDetailModel.find();
  console.log(skillDetail);
  res.status(200).json(skillDetail);
};

module.exports = { addSkillDetailData ,getSkillDetailData};
