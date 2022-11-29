const mongoose = require("mongoose");

const glAcountSchema = mongoose.Schema({
  glAcount_GLAccountInformation_accountType: { type: String },
  glAcount_GLAccountInformation_exportLevel: { type: String },
  glAcount_GLAccountInformation_accountNumber: { type: String },
  glAcount_GLAccountInformation_accountDescription: { type: String },
});

module.exports = mongoose.model("glAcountModel", glAcountSchema);
