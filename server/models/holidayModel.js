const mongoose = require("mongoose");

const holidaySchema = mongoose.Schema({
    holiday_holidayInformation_name: {type:String},
    holiday_holidayInformation_type1: {type:String},
    holiday_holidayInformation_type2: {type:String},
    holiday_holidayInformation_type3: {type:String},
    holiday_holidayInformation_occursOn_select1: {type:String},
    holiday_holidayInformation_occursOn_select2: {type:String},
    holiday_holidayInformation_occursOn_select3: {type:String},
    holiday_holidayInformation_startTime: {type:String},
    holiday_holidayInformation_duration: {type:String},
});

module.exports = mongoose.model("holidayModel", holidaySchema);