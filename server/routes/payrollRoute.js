const express = require("express");
const router = express.Router();
const { addPayRollData ,getPayRollData} = require('../controller/payrollController.js')


router.route('/addpayroll').post(addPayRollData);
router.route('/getpayroll').get(getPayRollData);

module.exports = router;