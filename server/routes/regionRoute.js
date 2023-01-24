const express = require("express");
const router = express.Router();
const {
  addRegionData,
  getRegionData,
  updateRegionData,
//   deleteRegionData,  
} = require("../controller/regionController");

router.route("/addregion").post(addRegionData);
router.route("/getregion").get(getRegionData);
router.route("/updateregion/:id").put(updateRegionData)
//   .delete(deleteRegionData);

module.exports = router;
