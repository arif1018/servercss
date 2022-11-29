const express = require("express");
const router = express.Router();
const { addSalesTaxCodeData, getSalesTaxCodeData } = require("../controller/salesTaxCodeController");

router.route("/addsalestaxcode").post(addSalesTaxCodeData);
router.route("/getsalestaxcode").get(getSalesTaxCodeData);


module.exports = router;
