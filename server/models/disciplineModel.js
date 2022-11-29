const mongoose = require("mongoose")

const disciplineModel = mongoose.Schema({
    admin_discipline_code_name: {type: String},
    admin_discipline_code_name_check: {type: String},
    admin_discipline_desc: {type: String},
    admin_discipline_specialities: {type: String},
    admin_discipline_skills: {type: String}  
})

module.exports = mongoose.model("disciplineModel", disciplineModel)