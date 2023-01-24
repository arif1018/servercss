const express = require("express");
const router = express.Router()
const {addProfitMarginData, getProfitMarginData} = require('../controller/profitMarginRankingController')

router.route("/addprofitmargin").post(addProfitMarginData);
router.route("/getprofitmargin").get(getProfitMarginData);

module.exports = router