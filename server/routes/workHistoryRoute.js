const express = require("express");
const router = express.Router();
const { addWorkHistoryData, getWorkHistoryData } = require('../controller/workHistoryController');

router.route("/addworkhistory").post(addWorkHistoryData);
router.route("/getworkhistory").get(getWorkHistoryData);

module.exports = router;
