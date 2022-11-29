const mongoose = require("mongoose");

const skillDetailSchema = mongoose.Schema({
  skillDetail_skillInformation_name: { type: String },
  skillDetail_skillInformation_description: { type: String },
});

module.exports = mongoose.model("skillDetailModel", skillDetailSchema);
