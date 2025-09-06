const mongoose = require("mongoose")
const list = require("./list")
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    username:{
        type: String,
        uniique: true
    },
    password: {
        type: String,
        unique:true,
        required: true
    },
    list: [{
        type:mongoose.Types.ObjectId,
        ref: "List",
    }]
})

module.exports = mongoose.model("User", userSchema)