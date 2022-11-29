const mongoose = require("mongoose")

const dropDownSchema = mongoose.Schema({
    drop_down_code_name: {type: String},
    drop_down_desc: {type: String}
})

module.exports = mongoose.model("DropDownModel", dropDownSchema)