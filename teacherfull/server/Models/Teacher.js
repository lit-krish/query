import mongoose from "mongoose"

const TeacherSchema=new mongoose.Schema({
    email:{
        type:"String",
        required:"true"
    
    },
    otp:{type:"String"},
    otpExpiry:{type:"Date"},
    firstname:{type:"String"},
    lastname:{type:"String"},
    gender:{type:"String"},
    availability:{type:"String"},//day when available generally
    qualification:{type:"String" },//degree
    qualificationstatus:{type:"String"},//ongoin or completed
    experience:{type:"String",default:"none",},//workes as teacher or none
    occupation:{type:"String",default:"none"},//current job
    subjects:{type:["String"]},//subjects to teach
})

export default mongoose.model("Teacher",TeacherSchema)
