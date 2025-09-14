import mongoose from "mongoose";
import Teacher from "../Models/Teacher.js";

export const getTeachers=async(req,res)=>{
     try{
        const teacherdata=await Teacher.find()
        return res.status(200).json(teacherdata)
     }
     catch(error)
     {
        console.log(error.message)
     }
}