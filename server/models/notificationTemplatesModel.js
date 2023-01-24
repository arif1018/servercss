const mongoose = require("mongoose")

const NotificationSchema = mongoose.Schema({
    notification_template_type: {type: String},
    notification_template_name: {type: String},
    notification_display_name: {type: String},
    notification_display_name2: {type: String},
    notification_address_form: {type: String},
    notification_nth_day_of_name: {type: String},
    notification_subject: {type: String},
    notification_subject2: {type: String},
    notification_email_message: {type: String}
})

module.exports = mongoose.model("Notificationscheme", NotificationSchema)