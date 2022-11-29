const express = require("express")
const router = express.Router()
const {addCredentialsData, getCredentialsData } = require("../controller/credentialsController")

router.route("/addcredentials").post(addCredentialsData);
router.route("/getcredentials").get(getCredentialsData);



module.exports = router