const express = require("express")
const router = express.Router()
const {addPaidLeaveData, getPaidLeaveData } = require("../controller/paidLeaveController")

router.route("/addpaidleave").post(addPaidLeaveData);
router.route("/getpaidleave").get(getPaidLeaveData);
// router.route("/clientdata/:id").get(getSingleClient)



module.exports = router