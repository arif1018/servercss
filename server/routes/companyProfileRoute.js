const express = require("express")
const router = express.Router()
const {addCompanyData, getCompanyData } = require("../controller/companyProfileController")

router.route("/addcompany").post(addCompanyData);
router.route("/getcompany").get(getCompanyData);



module.exports = router