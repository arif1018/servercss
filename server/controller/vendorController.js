const vendorScheme = require("../models/vendorModel");

const addVendorData = async (req, res) => {
  const userData = await vendorScheme.create(req.body);
  res.status(200).json(userData);
};

const getVendorData = async (req, res) => {
  const userData = await vendorScheme.find();
  res.status(200).json(userData);
};

module.exports = { addVendorData, getVendorData };
