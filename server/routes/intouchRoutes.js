const express = require("express");
const router = express.Router();
const {
    addIntouchData,
    getIntouchData,
} = require("../controller/intouchController");

router.route("/addintouch").post(addIntouchData);
router.route("/getintouch").get(getIntouchData);

module.exports = router;
