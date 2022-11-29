const mongoose = require("mongoose")

const payrollSchema = mongoose.Schema({
    payRoll_payrollCompanyInformation_name: {type:String},
    payRoll_payrollCompanyInformation_desc: {type:String},
    payRoll_payrollCompanyInformation_active: {type:String},
    payRoll_payrollCompanyInformation_federalID: {type:String},
    payRoll_payrollCompanyInformation_address1: {type:String},
    payRoll_payrollCompanyInformation_address2: {type:String},
    payRoll_payrollCompanyInformation_city: {type:String},
    payRoll_payrollCompanyInformation_state: {type:String},
    payRoll_payrollCompanyInformation_zip: {type:String},
    payRoll_payrollCompanyInformation_phone: {type:String},
    payRoll_payrollCompanyInformation_email: {type:String},
    payRoll_payStubHerade_text: {type:String},
})

module.exports = mongoose.model("payrollModel", payrollSchema)