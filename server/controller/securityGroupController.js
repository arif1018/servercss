// const asyncHandler = require("express-async-handler")
const securityGroupModel = require("../models/securityGroupModel.js");

const addSecurityGroupData = async (req, res) => {
  const securityGroup = await securityGroupModel.create(req.body);
  console.log(securityGroup);
  res.status(200).json(securityGroup);
};

const getSecurityGroupData = async (req, res) => {
  const securityGroup = await securityGroupModel.find();
  res.status(200).json(securityGroup);
};

module.exports = { addSecurityGroupData, getSecurityGroupData };
