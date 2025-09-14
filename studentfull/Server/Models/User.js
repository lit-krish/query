import mongoose from "mongoose"

const UserSchema=new mongoose.Schema({
    email:{
        type:"String",
        required:"true",
        unique:"true"
    },
    otp:{
        type:"String"
    },
    otpExpiry:{
       type:"Date"
    },
    firstname:{type:"String"},
    lastname:{type:"String"},
    gender:{type:"String"},
    currentclass:{type:"String"},
    freeaccess:{type:"Number"}
})

export default mongoose.model("User",UserSchema)