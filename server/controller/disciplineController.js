const disciplineModel = require("../models/disciplineModel");

const addDisciplineData = async (req, res) => {
    const discipline = await disciplineModel.create(req.body)
    res.status(200).json(discipline)
}

const getDisciplineData = async (req, res) => {
    const discipline = await disciplineModel.find()
    res.status(200).json(discipline)
}
    
module.exports = { addDisciplineData, getDisciplineData }