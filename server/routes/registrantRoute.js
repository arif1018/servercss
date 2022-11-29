const express = require("express")
const router = express.Router()
const {addregistrantData, getregistrantData} = require("../controller/registrantController")

router.route("/addregistrant").post(addregistrantData)
router.route("/getregistrant").get(getregistrantData)
// router.route("/getallclients").get(getAllClients)



module.exports = router