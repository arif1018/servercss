const mongoose = require("mongoose");

const securityGroupSchema = mongoose.Schema({
  securityGroup_securityGroupInformation_userType: { type: String },
  securityGroup_securityGroupInformation_groupName: { type: String },
  securityGroup_securityGroupInformation_description: { type: String },
});

module.exports = mongoose.model("securityGroupModel", securityGroupSchema);
