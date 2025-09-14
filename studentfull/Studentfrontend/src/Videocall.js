import { useSelector } from "react-redux"
import { IoVideocamOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import {v4 as uuid} from "uuid"
import { useNavigate } from "react-router-dom";
import { useSocket } from "./SocketProvider.js";
import "./videocall.css"

export const Videocall=()=>{

    const user = useSelector(state => state.userreducer?.data)
    const teachers = useSelector(state => state.teacherreducer?.data.filter(teacher=>teacher?.email!=user?.email))
    const navigate=useNavigate()
    const [remoteid,setremoteid]=useState("")
    const socket=useSocket()
    const room=uuid()//unique room id

    useEffect(()=>{
      socket.emit("get-online",user._id)
    },[])

    const requestVideocall=(id)=>{
        setremoteid(id)
        socket.emit("join-room",room)
    }

    useEffect(()=>{

       socket.on("room-joined",(room)=>{
          navigate(`/room/${room}`,{state:{remoteid}})
       })

       return()=>{
         socket.off("room-joined")
       }

    },[room])

    return(
      <div className="teachersdiv">
        {teachers?.map(teacher=>(
            <div  className="teacher"onClick={()=>requestVideocall(teacher._id)}>
                {teacher?.email}   <IoVideocamOutline/>
            </div>
        ))}
      </div>
   )
}