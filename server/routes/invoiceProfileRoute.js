const express = require("express")
const router = express.Router()
const {addInvoiceProfileData, getInvoiceProfileData} = require("../controller/invoiceProfileController")

router.route("/addinvoiceprofile").post(addInvoiceProfileData)
router.route("/getinvoiceprofile").get(getInvoiceProfileData)

module.exports = router