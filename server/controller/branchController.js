const BranchModel = require("../models/branchModel");

const addBranchData = async (req, res) => {
  const branch = await BranchModel.create(req.body);
  // console.log(branch);
  res.status(200).json(branch);
};

const getAllBrancheData = async (req, res) => {
  const branches = await BranchModel.find();
  res.status(200).json(branches);
};

module.exports = { addBranchData, getAllBrancheData };