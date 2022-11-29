const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
  companyProfile_general_agencyName_text: { type: String },
  companyProfile_general_emailAddress_text: { type: String },
  companyProfile_general_defaultDiscipline_default: { type: String },
  companyProfile_general_overtimeWarning: { type: String },
  companyProfile_general_doubleBookTolerance_check: { type: String },
  companyProfile_general_passwordploicy_enforceupperandlowercase: {
    type: String,
  },
  companyProfile_general_passwordploicy_enforceatleastonenumber: {
    type: String,
  },
  companyProfile_general_passwordploicy_minimumPasswordLength: { type: String },
  companyProfile_general_passwordploicy_passwordExpireIn: { type: String },
  companyProfile_general_passwordploicy_passwordscannotrepeatwithin: {
    type: String,
  },
  companyProfile_general_credentialStatusOverride_perDiem: { type: String },
  companyProfile_general_credentialStatusOverride_contracts: { type: String },
  companyProfile_general_stateLicenceRule_stateRule: { type: String },
  companyProfile_general_shedulingSearchOptions_select: { type: String },
  companyProfile_Client: [
    {
      companyProfile_client_activationOptions_select: { type: String },
    },
  ],
  companyProfile_Registry: [
    {
      companyProfile_Registry_activationOptions_options: { type: String },
      companyProfile_Registry_defaultNotificationSetting_RC_options: {
        type: String,
      },
      companyProfile_Registry_defaultNotificationSetting_RC_options2: {
        type: String,
      },
      companyProfile_Registry_frequuencyRules_1_text_1: { type: String },
      companyProfile_Registry_frequuencyRules_1_text_2: { type: String },
      companyProfile_Registry_frequuencyRules_2_text_1: { type: String },
      companyProfile_Registry_frequuencyRules_2_text_2: { type: String },
      companyProfile_Registry_frequuencyRules_3_text_1: { type: String },
      companyProfile_Registry_frequuencyRules_3_text_2: { type: String },
      companyProfile_Registry_frequuencyRules_4_text_1: { type: String },
      companyProfile_Registry_frequuencyRules_4_text_2: { type: String },
      companyProfile_Registry_credentialStatusEmailsOnlySentToRegistrantsinStatus_select:
        { type: String },
      companyProfile_Registry_workHistory_check: { type: String },
      companyProfile_Registry_daysToWait: { type: String },
      companyProfile_Registry_SSNChanges_check: { type: String },
      companyProfile_Registry_nextEmployeeID_EIN: { type: String },
      companyProfile_Registry_hireDate_hireDateRule: { type: String },
      companyProfile_Registry_partTimeDefault_partTime: { type: String },
      companyProfile_Registry_partTimeDefault_maximumHours: { type: String },
      companyProfile_Registry_benefitAdmin_enableBenefitAdmin: { type: String },
      companyProfile_Registry_benefitAdmin_benefitSystemType: { type: String },
      companyProfile_Registry_benefitAdmin_includeImport: { type: String },
      companyProfile_Registry_benefitAdmin_defaultBenefitClass: {
        type: String,
      },
      companyProfile_Registry_webPortalAccess_check: { type: String },
      companyProfile_Registry_webPortalTimecardImages_check: { type: String },
    },
  ],
  companyProfile_PayRoll: [
    {
      companyProfile_payRoll_payRollWeekSettings_default: { type: String },
      companyProfile_payRoll_payRollWeekSettings_weekBeginsOn: { type: String },
      companyProfile_payRoll_payRollWeekSettings_datePayRollChecksOn: {
        type: String,
      },
      companyProfile_payRoll_payRollWeekSettings_dateInvoiceOn: {
        type: String,
      },
      companyProfile_payRoll_payRollWeekSettings_enableEFTRD: { type: String },
      companyProfile_payRoll_payRollWeekSettings_enableEasily: { type: String },
      companyProfile_payRoll_payRollWeekSettings_batchCheckSortOrder: {
        type: String,
      },
      companyProfile_payRoll_shiftSplittingTolerance_tolerance: {
        type: String,
      },
      companyProfile_payRoll_EFTActivationDelay_text: { type: String },
      companyProfile_payRoll_payAdjustments_useRegistrantResidentLocation: {
        type: String,
      },
      companyProfile_payRoll_payCheckNotice_text: { type: String },
      companyProfile_overtimeWarning_check: { type: String },
      companyProfile_shedulingSearchOptions_options: { type: String },
      companyProfile_checkVoiding_checksMayBeVoidedWithIn: { type: String },
      companyProfile_overtimeAdjustments_disableOvertimeAdjustments: {
        type: String,
      },
    },
  ],
  companyProfile_Reference: [
    {
      companyProfile_reference_referenceInformation_name: { type: String },
      companyProfile_reference_referenceInformation_title: { type: String },
      companyProfile_reference_referenceInformation_employer: { type: String },
      companyProfile_reference_referenceInformation_address1: { type: String },
      companyProfile_reference_referenceInformation_address2: { type: String },
      companyProfile_reference_referenceInformation_city: { type: String },
      companyProfile_reference_referenceInformation_state: { type: String },
      companyProfile_reference_referenceInformation_zip: { type: String },
      companyProfile_reference_referenceInformation_email: { type: String },
      companyProfile_reference_referenceInformation_canContact: {
        type: String,
      },
      companyProfile_reference_referenceInformation_note: { type: String },
    },
  ],
});

module.exports = mongoose.model("companyProfileModel", companySchema);
