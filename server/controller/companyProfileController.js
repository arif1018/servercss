// const asyncHandler = require("express-async-handler")
const companyProfileModel = require("../models/companyProfileModel")

const addCompanyData = async (req, res) => {
  const company = await companyProfileModel.create(req.body);
  console.log(company)
  res.status(200).json(company);  
};

const getCompanyData = async (req, res) => {
  const company = await companyProfileModel.find();
  console.log(company)
  res.status(200).json(company);  
};


module.exports = { addCompanyData ,getCompanyData};
