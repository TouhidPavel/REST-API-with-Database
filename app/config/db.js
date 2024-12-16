const mongoose = require("mongoose")
const { DATABASE_URI } = require("./config")

const connectDB = async () => {
    try {
        await mongoose.connect(DATABASE_URI)
        console.log("Database Connection Success!")
    } catch (err) {
        console.error("Database Connection Failed!")
        console.error(`Reason: ${err.message}`)
        process.exit(1)
    }
}
connectDB()
module.exports = connectDB