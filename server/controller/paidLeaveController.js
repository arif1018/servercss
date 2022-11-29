// const asyncHandler = require("express-async-handler")
const paidleaveModel = require("../models/paidLeaveModel")

const addPaidLeaveData = async (req, res) => {
  const paidleave = await paidleaveModel.create(req.body);
  res.status(200).json({paidleave});
};


const getPaidLeaveData = async (req, res) => {
  const paidleave = await paidleaveModel.find();
  res.status(200).json(paidleave);
};



module.exports = { addPaidLeaveData ,getPaidLeaveData};
