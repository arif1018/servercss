const express = require("express");
const router = express.Router();
const { addUserDetailData,getUserDetailData } = require("../controller/userDetailController");

router.route("/adduserdetail").post(addUserDetailData);
router.route("/getuserdetail").get(getUserDetailData);

module.exports = router;
