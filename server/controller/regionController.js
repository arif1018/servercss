// const asyncHandler = require("express-async-handler")
const regionModel = require("../models/regionModel")

const addRegionData = async (req, res) => {
  const region = await regionModel.create(req.body);
  console.log(region)
  res.status(200).json(region);  
};

const getRegionData = async (req, res) => {
  const region = await regionModel.find();
  res.status(200).json(region);  
};


module.exports = { addRegionData, getRegionData };
