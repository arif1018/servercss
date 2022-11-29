const mongoose = require("mongoose");

const specialityDetailSchema = mongoose.Schema({
  specialityDetail_specialityInformation_name: { type: String },
  specialityDetail_specialityInformation_application: { type: String },
  specialityDetail_specialityInformation_description: { type: String },
});

module.exports = mongoose.model(
  "specialityDetailModel",
  specialityDetailSchema
);