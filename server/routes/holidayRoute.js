const express = require("express")
const router = express.Router()
const {addholidaData,getholidaData } = require("../controller/holidayController")

router.route("/addholiday").post(addholidaData);
router.route("/getholiday").get(getholidaData);
// router.route("/clientdata/:id").get(getSingleClient)



module.exports = router