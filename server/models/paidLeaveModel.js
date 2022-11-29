const mongoose = require("mongoose");

const paidleaveSchema = mongoose.Schema({
  paidLeave_policyInformation_name: { type: String },
  paidLeave_policyInformation_desc: { type: String },
  paidLeave_policyInformation_type: { type: String },
  paidLeave_policyCycle_select: { type: String },
  paidLeave_accuralRules_accural: { type: String },
  paidLeave_accuralRules_hours_every_worked: { type: String },
  paidLeave_accuralRules_maximumHoursPerYear: { type: String },
  paidLeave_accuralRules_maximumCarryOverHours: { type: String },
  paidLeave_accuralRules_accuralCommencement: { type: String },
  paidLeave_accuralRules_policyEffectiveDate: { type: String },
  paidLeave_usageRules_usageMayBegin: { type: String },
  paidLeave_usageRules_maximumUsagePerYear: { type: String },
  paidLeave_usageRules_maximumHoursWorked: { type: String },
  paidLeave_stateOrJurisdiction_state1: { type: String },
  paidLeave_stateOrJurisdiction_state2: { type: String },
  paidLeave_policyInformation_check1: { type: String },
  paidLeave_policyInformation_check2: { type: String },
});

module.exports = mongoose.model("paidleaveModel", paidleaveSchema);
