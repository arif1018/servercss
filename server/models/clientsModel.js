const mongoose = require("mongoose")

const clientsSchema = mongoose.Schema({
  client_general_branch:{type:String},
  client_general_name:{type:String},
  client_general_type:{type:String},
  client_general_sic:{type:String},
  client_general_group:{type:String},
  client_general_businessLine:{type:String},
  client_general_beds:{type:String},
  client_general_facs:{type:String},
  client_general_national:{type:String}, 
  client_general_gpo:{type:String}, 
  client_general_accountManager:{type:String},
  client_general_rating:{type:String},
  client_general_branchVisibility:{type:String},
  client_general_notes:{type:String},
  client_general_disciplinesServiced:{type:String},
  client_address:[{
      client_adresses_physical_address1: {type:String},
      client_adresses_physical_address2: {type:String},
      client_adresses_physical_city: {type:String},
      client_adresses_physical_state: {type:String},
      client_adresses_physical_zip: {type:String},
      client_adresses_locationCode: {type:String},
      client_adresses_muncipality: {type:String},
      client_adresses_schoolDistrict: {type:String},
      client_adresses_paidLeaveJurisdiction: {type:String},
      client_adresses_FICA: {type:String},
      client_adresses_billing_address1: {type:String},
      client_adresses_billing_address2: {type:String},
      client_adresses_billing_city: {type:String},
      client_adresses_billing_state: {type:String},
      client_adresses_billing_zip: {type:String},
      client_adresses_name: {type:String},
      client_adresses_attn: {type:String},
  }],
  client_billing:[{
    client_biling_billBy: {type:String},
    client_biling_discount: {type:String},
    client_biling_discountType: {type:String},
    client_biling_timeCard: {type:String},
    client_biling_consolidated: {type:String}, // this is checkbok please  confrm the functional code  line No.108
    client_biling_timeSheets: {type:String}, // this is checkbok please  confrm the functional code  line No.152
    client_biling_require: {type:String}, // this is checkbok please  confrm the functional code  line No.169
    client_biling_weekStartTime: {type:String},
    client_biling_weekStartTime_day: {type:String},
    client_biling_WeekendStartTime: {type:String},
    client_biling_WeekendStartTime_day: {type:String},
    client_biling_WeekendEndTime: {type:String},
    client_biling_WeekendEndTime_day: {type:String},
    client_biling_overtimeRule: {type:String}, // this is checkbok please  confrm the functional code  line No.292
    client_biling_onCallRule: {type:String},
    client_biling_acceptsOT: {type:String}, // this is checkbok please confrm  functional the code  line No.300
    client_biling_TimeRounding: {type:String},
    client_biling_split_shift: {type:String}, // this is checkbok please confrm  functional the code  line No.329
    client_biling_split_weekend: {type:String}, // this is checkbok please confrm  functional the code  line No.330
    client_biling_split_holiday: {type:String}, // this is checkbok please confrm  functional the code  line No.331
    client_biling_payModifiers_OT_1: {type:String},
    client_biling_payModifiers_OT_2: {type:String},
    client_biling_payModifiers_DBL_1: {type:String},
    client_biling_payModifiers_DBL_2: {type:String},
    client_biling_payModifiers_Holiday_1: {type:String},
    client_biling_payModifiers_Holiday_2: {type:String},
    client_biling_payModifiers_Max_1: {type:String},
    client_biling_payModifiers_Max_2: {type:String},
    client_biling_billModifiers_OT_1: {type:String},
    client_biling_billModifiers_OT_2: {type:String},
    client_biling_billModifiers_DBL_1: {type:String},
    client_biling_billModifiers_DBL_2: {type:String},
    client_biling_billModifiers_Holiday_1: {type:String},
    client_biling_billModifiers_Holiday_2: {type:String},
    client_biling_billModifiers_Max_1: {type:String},
    client_biling_billModifiers_Max_2: {type:String},
    client_biling_facultyCancel_DBL_1: {type:String},
    client_biling_facultyCancel_DBL_2: {type:String},
    client_biling_facultyCancel_Holiday_1: {type:String},
    client_biling_facultyCancel_Holiday_2: {type:String},
    client_biling_agencyCancel_DBL_1: {type:String},
    client_biling_agencyCancel_DBL_2: {type:String},
    client_biling_agencyCancel_Holiday_1: {type:String},
    client_biling_agencyCancel_Holiday_2: {type:String},
    client_biling_salesTax: {type:String},
    client_biling_payor: {type:String},
    client_biling_method: {type:String},
    client_biling_terms: {type:String},
    client_biling_financeChrg: {type:String}, // this is chec☻kbok please confrm  functional the code  line No.799
    client_biling_rate: {type:String},
  }],
  client_invoicing:[{
    client_invoicing_invoiceProfile: {type:String},
    client_invoicing_invoiceFormat: {type:String},
    client_invoicing_frequency: {type:String},
    client_invoicing_separation: {type:String},
    client_invoicing_maxShifts: {type:String},
    client_invoicing_maxAmounts: {type:String},
    client_invoicing_noQueuing: {type:String}, 
    client_invoicing_printQueuing: {type:String}, 
    client_invoicing_printQueuing_copies: {type:String},
    client_invoicing_emailQueuing: {type:String}, 
    client_invoicing_status: {type:String}, 
    client_invoicing_includeTimecard: {type:String}, 
    client_invoicing_includeTimecard_images: {type:String},
    client_invoicing_includeTimesheet: {type:String}, 
    client_invoicing_notes: {type:String},
    client_invoicing_emailTemplate: {type:String},

  }]
})

module.exports = mongoose.model("Clients",clientsSchema)