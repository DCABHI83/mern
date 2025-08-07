import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required : true
    },
phone:{
type:String,
required:true
},
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
    type:Boolean,
    default:false
    },
    avatar:{
        type:String,
        required:false
    },


},{timestamps:true})

export const User = mongoose.model("User",userSchema)