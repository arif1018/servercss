const intouchModel = require("../models/intouchModel");

const addIntouchData = async (req, res) => {
  const intouch = await intouchModel.create(req.body);
  res.status(200).json(intouch);
};

const getIntouchData = async (req, res) => {
  const intouch = await intouchModel.find();
  res.status(200).json(intouch);
};

module.exports = { addIntouchData, getIntouchData };