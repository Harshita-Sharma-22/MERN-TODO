const mongoose = require("mongoose")

const connection = async (req, res) => {
    try {
        await mongoose
        .connect("mongodb+srv://harshita:Harshita%4022@cluster0.crhv6ob.mongodb.net/").then(()=>{
        console.log("Connected")
    })
    } catch (error) {
        res.status(404).json({message: "Not Connected"})
    }
}
connection()