const mongoose = require("mongoose")

const ProfitMarginRankingSchema = mongoose.Schema({
    profit_margin_ranking_name: {type: String},
    profit_margin_start: {type: String},
    profit_margin_end: {type: String}
})

module.exports = mongoose.model("ProfitMarginScheme", ProfitMarginRankingSchema)

