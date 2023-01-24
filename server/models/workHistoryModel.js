const mongoose = require("mongoose");

const workHistorySchema = mongoose.Schema({
    workHistory_client: { type: String },
    workHistory_department: { type: String },
    workHistory_registrant: { type: String },
    workHistory_employee_id: { type: String },
    workHistory_first_worked: { type: String },
    workHistory_last_worked: { type: String },
    workHistory_oriented: { type: String },
    workHistory_oriented_date: {type: String},
    workHistory_oriented_check: {type: String},
    workHistory_comments: {type: String}
});

module.exports = mongoose.model("workHistoryModel", workHistorySchema);
