const invoiceProfileModel = require("../models/invoiceProfileModel");

const addInvoiceProfileData = async (req, res) => {
  const invoiceProfile = await invoiceProfileModel.create(req.body);
  res.status(200).json(invoiceProfile);
};

const getInvoiceProfileData = async (req, res) => {
  const invoiceProfile = await invoiceProfileModel.find();
  res.status(200).json(invoiceProfile);
};

module.exports = { addInvoiceProfileData, getInvoiceProfileData };
