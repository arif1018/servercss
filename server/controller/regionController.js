// const asyncHandler = require("express-async-handler")
const regionModel = require("../models/regionModel");

const addRegionData = async (req, res) => {
  const region = await regionModel.create(req.body);
  console.log(region);
  res.status(200).json(region);
};

const getRegionData = async (req, res) => {
  const region = await regionModel.find();
  res.status(200).json(region);
};

const updateRegionData = async (req, res) => {
  const region = await regionModel.findById(req.params.id);
  if (!region) {
    throw new Error("Data Not Found");
  }

  const updateRegion = await region.findByIdAndUpdade(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updateRegion);
};

module.exports = { addRegionData, getRegionData, updateRegionData };