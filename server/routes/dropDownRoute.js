const express = require("express")
const router = express.Router()
const {dropDownPost, dropDownGet} = require("../controller/dropDownController")

router.route("/addDropDown").post(dropDownPost)
router.route("/getdropdown").get(dropDownGet)

module.exports = router