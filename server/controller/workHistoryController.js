const WorkHistoryDataScheme = require('../models/workHistoryModel')

const addWorkHistoryData = async (req, res) => {
  const workData = await WorkHistoryDataScheme.create(req.body);
  res.status(200).json(workData);
};

const getWorkHistoryData = async (req, res) => {
  const HistoryData = await WorkHistoryDataScheme.find();
  res.status(200).json(HistoryData);
};

module.exports = { addWorkHistoryData, getWorkHistoryData };
