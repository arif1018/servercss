const DropDownModel = require("../models/dropDownModel")

const dropDownPost = async(req, res) => {
    const dropDownData = await DropDownModel.create(req.body)
    res.status(200).json(dropDownData)
}

const dropDownGet = async(req, res) => {
    const dropDownData = await DropDownModel.find()
    res.status(200).json(dropDownData)
}

module.exports = {dropDownPost, dropDownGet}