const express = require("express")
const router = express.Router()
const { addEarningDeductionData, getEarningDeductionData } = require("../controller/earningDeductionController")

router.route("/addearningdeduction").post(addEarningDeductionData)
router.route("/getearningdeduction").get(getEarningDeductionData)

module.exports = router