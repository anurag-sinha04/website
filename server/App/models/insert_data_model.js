let mongoose = require("mongoose")

let insertSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:false
    },
    name:{
        required:true,
        type:String
    },
    Class:{
        required:true,
        type:String
    },
    phone:{
        required:true,
        type:String
    }
})

let insertdata = mongoose.model("User-Data",insertSchema)

module.exports = {insertdata}