const mongoose = require("mongoose");

const invoiceProfileSchema = mongoose.Schema({
  invoice_profile_name: { type: String },
});

module.exports = mongoose.model("invoiceProfileModel", invoiceProfileSchema);
