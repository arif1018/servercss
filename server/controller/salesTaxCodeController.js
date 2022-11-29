// const asyncHandler = require("express-async-handler")
const salesTaxCodeModel = require("../models/salesTaxCodeModel");

const addSalesTaxCodeData = async (req, res) => {
  const salesTaxCode = await salesTaxCodeModel.create(req.body);
  console.log(salesTaxCode);
  res.status(200).json(salesTaxCode);
};

const getSalesTaxCodeData = async (req, res) => {
  const salesTaxCode = await salesTaxCodeModel.find();
  res.status(200).json(salesTaxCode);
};

module.exports = { addSalesTaxCodeData, getSalesTaxCodeData };
