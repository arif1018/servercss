const mongoose = require("mongoose");

const salesTaxCodeSchema = mongoose.Schema({
  salesTaxCode_salestaxInformation_name: { type: String },
  salesTaxCode_salestaxInformation_description: { type: String },
  salesTaxCode_salestaxInformation_state: { type: String },
  salesTaxCode_salestaxInformation_taxAuthority: { type: String },
  salesTaxCode_salestaxInformation_rate: { type: String },
  salesTaxCode_salestaxInformation_glLiabilityAccount: { type: String },
  salesTaxCode_salestaxInformation_interfaceValue: { type: String },
});

module.exports = mongoose.model("salesTaxCodeModel", salesTaxCodeSchema);
