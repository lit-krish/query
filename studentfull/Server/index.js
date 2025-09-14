import express, { urlencoded } from "express"
import {mongoose} from "mongoose"
import cors from "cors"
import config from "./config.js"
import userroutes from "./Routes/User.js"
import teacherroutes from "./Routes/Teacher.js"
import cookieParser from "cookie-parser"
import http from "http"
import {Server} from "socket.io"
import Videocall from "./Controllers/Videocall.js"

const app=express()
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(cors())
app.use(cookieParser())

//console.log(config.mongoURL)

mongoose.connect(config.mongoURL).then(()=>console.log("Database connected")).catch((err)=>console.log(err.message))

app.get("/",(req,res)=>{
    res.send("server running on port 5000")
})

app.use("/user",userroutes)
app.use(teacherroutes)


app.listen(5000,()=>{
    console.log("server running on port 5000")
})
