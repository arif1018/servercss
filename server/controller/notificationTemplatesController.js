const NotificationTemplateModel = require("../models/notificationTemplatesModel");

const addNotificationTemplate = async(req, res) => {
    const addNotificationData = await NotificationTemplateModel.create(req.body);
    res.status(200).json(addNotificationData)
}

const getNotificationTemplate = async(req, res) => {
    const getNotificationData = await NotificationTemplateModel.find();
    res.status(200).json(getNotificationData)
}

module.exports = { addNotificationTemplate, getNotificationTemplate }