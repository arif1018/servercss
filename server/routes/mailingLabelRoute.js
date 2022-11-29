const express = require("express")
const router = express.Router()
const {addmailingLabelData, getmailingLabelData } = require("../controller/mailingLabelController")

router.route("/addmailinglabel").post(addmailingLabelData);
router.route("/getmailinglabel").get(getmailingLabelData);



module.exports = router