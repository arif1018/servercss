// const asyncHandler = require("express-async-handler")
const ProfitMarginRankingSchema = require('../models/profitMarginRankingModel')

const addProfitMarginData = async (req, res) => {
  const profitMarginRanking = await ProfitMarginRankingSchema.create(req.body);
  console.log(profitMarginRanking)
  res.status(200).json(profitMarginRanking);  
};


const getProfitMarginData = async (req, res) => {
  const profitMarginRanking = await ProfitMarginRankingSchema.find();
//   console.log(mailingLabel)
  res.status(200).json(profitMarginRanking);  
};


module.exports = { addProfitMarginData ,getProfitMarginData};
