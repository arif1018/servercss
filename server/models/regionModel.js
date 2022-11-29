const mongoose = require("mongoose");

const regionSchema = mongoose.Schema({
  region_regionInformation_name: { type: String },
  region_regionInformation_description: { type: String },
  region_regionInformation_branches: { type: String },
});

module.exports = mongoose.model("regionModel", regionSchema);
