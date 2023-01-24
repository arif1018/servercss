const mongoose = require('mongoose')

const intouchSchema = mongoose.Schema({
    intouch_type: {type: String},
    intouch_order: {type: String},
    intouch_invoice: {type: String},
    intouch_client: {type: String},
    intouch_dept: {type: String},
    intouch_client_contact: {type: String},
    intouch_registrant: {type: String},
    intouch_assigned_branch: {type: String},
    intouch_assigned_user: {type: String},
    intouch_date: {type: String},
    intouch_check_mark_completed: {type: String},
    intouch_subscribed_users: {type: String},
    intouch_send_due_date_time: {type: String},
    intouch_remind_subscribers_before_due1: {type: String},
    intouch_remind_subscribers_before_due2: {type: String},
    intouch_remind_subscribers_when_overdue_every: {type: String},

    intouch_notes: [{
        notes_templates: {type: String},
        notes_subject: {type: String},
        notes_new_notes: {type: String}
    }],

    intouch_reminders: [{
        reminders_date_time: {type: String},
        reminders_reminder: {type: String},
        reminders_users: {type: String}
    }]
})

module.exports = mongoose.model("IntoucSchema", intouchSchema)