// const asyncHandler = require("express-async-handler")
const userDetailModel = require("../models/userDetailModel");

const addUserDetailData = async (req, res) => {
  const UserDetail = await userDetailModel.create(req.body);
  console.log(UserDetail);
  res.status(200).json(UserDetail);
};

const getUserDetailData = async (req, res) => {
  const UserDetail = await userDetailModel.find();
  console.log(UserDetail);
  res.status(200).json(UserDetail);
};

module.exports = { addUserDetailData, getUserDetailData };
