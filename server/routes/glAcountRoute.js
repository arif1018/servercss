const express = require("express")
const router = express.Router()
const {addglAcountData,getglAcountData } = require("../controller/glAcountController")

router.route("/addglAcount").post(addglAcountData);
router.route("/getglAcount").get(getglAcountData);



module.exports = router