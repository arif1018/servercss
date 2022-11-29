const mongoose = require("mongoose")

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect("mongodb://arif:admin@18.210.167.222:27017/css")
        console.log(`Database Has Been Connected ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB