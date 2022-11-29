const express = require("express");
const router = express.Router();
const {
  addBranchData,
  getAllBrancheData,
} = require("../controller/branchController");

router.route("/addbranch").post(addBranchData);
router.route("/getbranch").get(getAllBrancheData);

module.exports = router;
