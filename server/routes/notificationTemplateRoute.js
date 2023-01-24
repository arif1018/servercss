const express = require("express");
const router = express.Router()
const {addNotificationTemplate, getNotificationTemplate} = require("../controller/notificationTemplatesController");

router.route("/addnotificationtemplates").post(addNotificationTemplate);
router.route("/getnotificationtemplates").get(getNotificationTemplate);

module.exports = router