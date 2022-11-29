const mongoose = require("mongoose");

const credentialsSchema = mongoose.Schema({
  credentials_credentialsInformation_type: { type: String },
  credentials_credentialsInformation_codeName: { type: String },
  credentials_credentialsInformation_codeDescription: { type: String },
  credentials_credentialsInformation_passingResult: { type: String },
  credentials_credentialsInformation_vnLabel: { type: String },
  credentials_credentialsInformation_defineCustomCodes: { type: String },
  credentials_credentialsInformation_discipline: { type: String },
  credentials_credentialsInformation_specialities: { type: String },
  credentials_credentialsOption_useExpirationDate: { type: String },
  credentials_credentialsOption_getAcquiredData: { type: String },
  credentials_credentialsInformation_agencyRequired: { type: String },
  credentials_credentialsInformation_autoAddedtonewRegistrant: { type: String },
  credentials_credentialsInformation_noRegistrantNotifications: {
    type: String,
  },
  credentials_credentialsInformation_hidefromRegistrantPortal: { type: String },
  credentials_credentialsInformation_hidefromOnlineApplication: {
    type: String,
  },
  credentials_credentialsInformation_requestDocuments: { type: String },
}); 

module.exports = mongoose.model("credentialsModel", credentialsSchema);
