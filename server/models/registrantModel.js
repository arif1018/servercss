const mongoose = require("mongoose");

const registrantSchema = mongoose.Schema({
  registrant_general_clientsInformation_currentStatus: { type: String },
  registrant_general_clientsInformation_branch: { type: String },
  registrant_general_clientsInformation_ssn: { type: String },
  registrant_general_clientsInformation_discipline: { type: String },
  registrant_general_clientsInformation_firstName: { type: String },
  registrant_general_clientsInformation_lastName: { type: String },
  registrant_general_clientsInformation_middleInitial: { type: String },
  registrant_general_clientsInformation_maidenName: { type: String },
  registrant_general_clientsInformation_nickName: { type: String },
  registrant_general_clientsInformation_branchVisibility: { type: String },
  registrant_contact: [
    {
      registrant_contact_payModifiers_name: { type: String },
      registrant_contact_payModifiers_phone: { type: String },
      registrant_contact_payModifiers_relation: { type: String },
    },
  ],
  registrant_preferences: [
    {
      registrant_preferences_clientsInformation_workerType: { type: String },
      registrant_preferences_contactInformation_hourly: { type: String },
      registrant_preferences_contactInformation_monthly: { type: String },
      registrant_preferences_contactInformation_weekly: { type: String },
      registrant_preferences_contactInformation_yearly: { type: String },
      registrant_preferences_weekHours_maximum: { type: String },
      registrant_preferences_weekDay_maximum: { type: String },
      registrant_preferences_clientsInformation_max1: { type: String },
      registrant_preferences_clientsInformation_maxOvernightStays: {
        type: String,
      },
      registrant_preferences_schedulingPreferences_preferences: {
        type: String,
      },
      registrant_preferences_schedulingPreferences_localAssignmentsOnly: {
        type: String,
      },
      registrant_preferences_schedulingPreferences_localOrTravelAssignmentsOnly:
        { type: String },
      registrant_preferences_schedulingPreferences_travelAssignmentsOnly: {
        type: String,
      },
      registrant_preferences_schedulingPreferences_willDriveWithin100Miles: {
        type: String,
      },
      registrant_preferences_schedulingPreferences_perdiem: { type: String },
      registrant_preferences_schedulingPreferences_requestDocuments: {
        type: String,
      },
      registrant_preferences_schedulingPreferences_allowOverride: {
        type: String,
      },
    },
  ],
  registrant_HR: [
    {
      registrant_HR_EEO_sex: { type: String },
      registrant_HR_EEO_ethnicity: { type: String },
      registrant_HR_EEO_disability: { type: String },
      registrant_HR_EEO_veteran: { type: String },
      registrant_HR_EEO_birthday: { type: String },
      registrant_HR_EEO_marital: { type: String },
      registrant_HR_EEO_hired: { type: String },
      registrant_HR_referral_source: { type: String },
      registrant_HR_referral_sourceName: { type: String },
      registrant_HR_referral_secondarySource: { type: String },
      registrant_HR_referral_secondarySourceName: { type: String },
      registrant_HR_referral_coordinator: { type: String },
      registrant_HR_referral_recruiter: { type: String },
      registrant_HR_referral_interviewedBy: { type: String },
      registrant_HR_referral_interviewedDate: { type: String },
      registrant_HR_employmentStatus_partTime: { type: String },
      registrant_HR_employmentStatus_notToExceed: { type: String },
      registrant_HR_workStatus_firstWorked: { type: String },
      registrant_HR_workStatus_lastWorked: { type: String },
    },
  ],
  registrant_payroll: [
    {
      registrant_payroll_payrollSystemIDs_companyID: { type: String },
      registrant_payroll_payrollSystemIDs_departmentID: { type: String },
      registrant_payroll_payrollSystemIDs_employee: { type: String },
      registrant_payroll_employmentStatus_text: { type: String },
      registrant_payroll_workStatus_radio: { type: String },
    },
  ],
});

module.exports = mongoose.model("registrantModel", registrantSchema);