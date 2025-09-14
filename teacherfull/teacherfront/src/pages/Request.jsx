import React from "react";
import { useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../SocketProvider.jsx";
import { useSelector } from "react-redux";
import "./Request.css";


function Request() {
    const [callcoming,setcallcoming] = useState(false)
    const [incommingcall, setincommingcall] = useState(false)
    let Offer = null
    const [room,setroom] =useState("")
    var Caller_socketid =''
    const navigate = useNavigate()
    const socket=useSocket()
    console.log(socket)
    const user=useSelector(state => state.userreducer.data)
    

    const answerCall = ({offer, caller_socketid,roomid}) => {
        //console.log("chal bhi")
        setcallcoming(true)
        setincommingcall(true)
        setroom(roomid)
        Caller_socketid=caller_socketid
        Offer=offer
        console.log(caller_socketid)
    }

    

    const acceptCall = async () => {
        console.log(room)
        socket.emit("join-room",room)
        setcallcoming(false)
    }

    console.log(user,socket.id)

    useEffect(()=>{

        socket.emit("get-online",user._id)
        
    }
    
      ,[])
    
    useEffect(() => {

        socket.on("room-joined",(room)=>{
            console.log(room)
            navigate(`/room/${room}`,{state:{
                caller_socketid:Caller_socketid,
                offer:Offer
            }})
        
        })
        


        socket.on("answer-call", (payload) => {
            //console.log(payload)
            const {
                offer,caller_socketid,roomid
            }=payload
        
            answerCall({offer, caller_socketid,roomid})
        })
        return()=>{
            socket.off("room-joined")
            socket.off("answer-call")
          }
    }, [socket])

    console.log(incommingcall)
    return (<div className="call-container">
        {incommingcall ?
            <div className="ml-5">
                <h1 > 📞Incoming Call...</h1>
                {callcoming&& <audio loop src ="/incoming-call-2-296474.mp3" autoPlay ></audio>}
                <div className="buttonss">
                <button className="btn3 accept" onClick={acceptCall} >Click to join</button>
                
                </div>
            </div>
            :
            <div>

            </div>}
    </div>);
}
export default Request;