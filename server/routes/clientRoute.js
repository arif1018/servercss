const express = require("express")
const router = express.Router()
const {getAllClients, addClient, getSingleClient, updateClient, deleteClient } = require("../controller/clientController")

router.route("/getallclients").get(getAllClients)
router.route("/addclient").post(addClient)
router.route("/clientdata/:id").get(getSingleClient)
router.route("/updateclient/:id").put(updateClient).delete(deleteClient)

module.exports = router 