const express = require("express")
const router = express.Router()
const {addburdernGroupData, getburdernGroupData } = require("../controller/burdernGroupController")

router.route("/addburderngroup").post(addburdernGroupData);
router.route("/getburderngroup").get(getburdernGroupData);



module.exports = router