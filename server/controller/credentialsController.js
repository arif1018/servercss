// const asyncHandler = require("express-async-handler")
const credentialsModel = require("../models/credentialsModel")

const addCredentialsData = async (req, res) => {
  const credentials = await credentialsModel.create(req.body);
  console.log(credentials)
  res.status(200).json(credentials);  
};

const getCredentialsData = async (req, res) => {
  const credentials = await credentialsModel.find();
  console.log(credentials)
  res.status(200).json(credentials);  
};


module.exports = { addCredentialsData ,getCredentialsData};
