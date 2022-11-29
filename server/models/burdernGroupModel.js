const mongoose = require("mongoose");

const burdernGroupSchema = mongoose.Schema({
    burdenGroup_burdenGroupInformation_name: {type:String},
    burdenGroup_burdenGroupInformation_desc: {type:String},
}); 

module.exports = mongoose.model("burdernGroupModel", burdernGroupSchema);
