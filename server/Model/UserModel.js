const mongoose = require("mongoose");

const UserSchema=mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    realNameAndSurname:{
        type:String,
        required:true
    },
    post:[{
        default:null,
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    }]
})
module.exports=mongoose.model("users",UserSchema);