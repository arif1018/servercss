const express = require("express")
const router = express.Router()
const {addRegionData, getRegionData } = require("../controller/regionController")

router.route("/addregion").post(addRegionData);
router.route("/getregion").get(getRegionData);



module.exports = router