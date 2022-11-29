const mongoose = require("mongoose")

const payorSchema = mongoose.Schema({
    payor_payor_name: {type: String},
    payor_address: {type: String},
    payor_city: {type: String},
    payor_state: {type: String},
    payor_zip: {type: String}
})

module.exports = mongoose.model("payorModel", payorSchema)