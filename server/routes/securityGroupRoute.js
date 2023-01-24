const express = require("express");
const router = express.Router();
const { addSecurityGroupData, getSecurityGroupData } = require("../controller/securityGroupController");

router.route("/addsecuritygroup").post(addSecurityGroupData);
router.route("/getsecuritygroup").get(getSecurityGroupData);


module.exports = router;
