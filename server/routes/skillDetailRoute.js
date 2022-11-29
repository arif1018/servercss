const express = require("express");
const router = express.Router();
const { addSkillDetailData, getSkillDetailData } = require("../controller/skillDetailController");

router.route("/addskilldetail").post(addSkillDetailData);
router.route("/getskilldetail").get(getSkillDetailData);

module.exports = router;
