const express = require("express")
const router = express.Router()
const { addPayorData, getPayorData } = require("../controller/payorController")

router.route("/addpayor").post(addPayorData) 
router.route("/getpayor").get(getPayorData)  

module.exports = router