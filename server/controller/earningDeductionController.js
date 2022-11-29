const earningDeductionScheme = require("../models/earningdeductionModel")

const addEarningDeductionData = async (req, res) => {
    const userData = await earningDeductionScheme.create(req.body)
    res.status(200).json(
        userData
)
}

const getEarningDeductionData = async (req, res) => {
    const userData = await earningDeductionScheme.find()
    res.status(200).json(
        userData
    )
}

module.exports = { addEarningDeductionData, getEarningDeductionData }