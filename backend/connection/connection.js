const mongoose = require("mongoose")

const connection = async (req, res) => {
    try {
        await mongoose.connect(
            "mongodb+srv://harshitasharmathandla_db_user:68Y6g9AGSKY8UJTa@cluster0.s3btjro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        )
        console.log("Connected")
    } catch (error) {
        res.status(404).json({message: "Not Connected"})
    }
}
connection()
module.exports = connection