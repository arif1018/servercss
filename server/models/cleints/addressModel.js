const mongoose = require("mongoose")

const clients_Address_Schema = mongoose.Schema({
    client_adresses_physical_address1: {type:String, required:[true, "Please Add Branch Name"]},
    client_adresses_physical_address2: {type:String, required:[true, "Please Add Branch Name"]},
    client_adresses_physical_city: {type:String, required:[true, "Please Add Branch Name"]},
    client_adresses_physical_state: {type:String, required:[true, "Please Add Branch Name"]},
    client_adresses_physical_zip: {type:String, required:[true, "Please Add Branch Name"]},
    client_adresses_locationCode: {type:String, required:[true, "Please Add Branch Name"]},
    client_adresses_muncipality: {type:String, required:[true, "Please Add Branch Name"]},
    client_adresses_schoolDistrict: {type:String, required:[true, "Please Add Branch Name"]},
    client_adresses_paidLeaveJurisdiction: {type:String, required:[true, "Please Add Branch Name"]},
    client_adresses_FICA: {type:String, required:[true, "Please Add Branch Name"]},
    client_adresses_billing_address1: {type:String, required:[true, "Please Add Branch Name"]},
    client_adresses_billing_address2: {type:String, required:[true, "Please Add Branch Name"]},
    client_adresses_billing_city: {type:String, required:[true, "Please Add Branch Name"]},
    client_adresses_billing_state: {type:String, required:[true, "Please Add Branch Name"]},
    client_adresses_billing_zip: {type:String, required:[true, "Please Add Branch Name"]},
    client_adresses_name: {type:String, required:[true, "Please Add Branch Name"]},
    client_adresses_attn: {type:String, required:[true, "Please Add Branch Name"]},
})

module.exports = mongoose.model("Clients_Address", clients_Address_Schema)