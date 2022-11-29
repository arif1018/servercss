const express = require("express");
const router = express.Router();
const { addSpecialityDetailData, getSpecialityDetailData } = require("../controller/specialityDetailController");

router.route("/addspecialitydetail").post(addSpecialityDetailData);
router.route("/getspecialitydetail").get(getSpecialityDetailData);

module.exports = router;
