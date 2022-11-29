// const asyncHandler = require("express-async-handler")
const glAcountModel = require("../models/glAcountModel")

const addglAcountData = async (req, res) => {
  const glAcount = await glAcountModel.create(req.body);
  console.log(glAcount)
  res.status(200).json(glAcount);
};


const getglAcountData = async (req, res) => {
    const glAcount = await glAcountModel.find();
    res.status(200).json(glAcount);
  };



module.exports = { addglAcountData,getglAcountData };
