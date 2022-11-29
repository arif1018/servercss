// const asyncHandler = require("express-async-handler")
const specialityDetailModel = require("../models/specialityDetailModel");

const addSpecialityDetailData = async (req, res) => {
  const SpecialityDetail = await specialityDetailModel.create(req.body);
  console.log(SpecialityDetail);
  res.status(200).json(SpecialityDetail);
};

const getSpecialityDetailData = async (req, res) => {
  const SpecialityDetail = await specialityDetailModel.find();
  console.log(SpecialityDetail);
  res.status(200).json( SpecialityDetail );
};

module.exports = { addSpecialityDetailData, getSpecialityDetailData };
