const mongoose = require("mongoose");

const mailingLabelSchema = mongoose.Schema({
    mailingLabel_labelLayout_labelName: {type:String},
    mailingLabel_labelLayout_default: {type:String},
    mailingLabel_labelLayout_topMargin: {type:String},
    mailingLabel_labelLayout_sideMargin: {type:String},
    mailingLabel_labelLayout_pitch: {type:String},
    mailingLabel_labelLayout_labelWidth: {type:String},
    mailingLabel_labelLayout_labelHight: {type:String},
    mailingLabel_labelLayout_labelAcross: {type:String},
    mailingLabel_labelLayout_labelDown: {type:String},
    mailingLabel_labelLayout_textAlignment: {type:String},
    mailingLabel_labelLayout_fontSize: {type:String},
    mailingLabel_previewLabelText_name: {type:String},
    mailingLabel_previewLabelText_attn: {type:String},
    mailingLabel_previewLabelText_address1: {type:String},
    mailingLabel_previewLabelText_address2: {type:String},
    mailingLabel_previewLabelText_city: {type:String},
    mailingLabel_previewLabelText_state: {type:String},
    mailingLabel_previewLabelText_zip: {type:String},
}); 

module.exports = mongoose.model("mailingLabelModel", mailingLabelSchema);
