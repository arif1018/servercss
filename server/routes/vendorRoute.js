const express = require("express")
const { addVendorData, getVendorData } = require("../controller/vendorController")
const router = express.Router()


router.route("/addvendor").post(addVendorData)
router.route("/getvendor").get(getVendorData)


module.exports = router