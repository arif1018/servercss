const express = require("express")
const router = express.Router()
const {addDisciplineData, getDisciplineData} = require("../controller/disciplineController")

router.route("/adddiscipline").post(addDisciplineData)
router.route("/getdiscipline").get(getDisciplineData)

module.exports = router