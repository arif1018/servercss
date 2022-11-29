const mongoose = require("mongoose")

const vendorSchema = mongoose.Schema({
    vendor_vendor_type: {type: String},
    vendor_vendor_name: {type: String},
    vendor_address_1: {type: String},
    vendor_address_2: {type: String},
    vendor_county: {type: String},
    vendor_city: {type: String},
    vendor_state: {type: String},
    vendor_zip: {type: String},
    vendor_notes: {type: String},
    vendor_main: {type: String},
    vendor_mobile: {type: String},
    vendor_fax: {type: String},
    vendor_email: {type: String}
})

module.exports = mongoose.model("vendorScheme", vendorSchema)