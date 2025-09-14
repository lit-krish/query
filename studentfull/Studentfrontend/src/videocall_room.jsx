import { useEffect, useState ,useRef} from "react"
import { useParams, useLocation } from "react-router-dom"
import { PeerService } from "./peer.js";
import { useSocket } from "./SocketProvider.js";
import { useCallback } from "react";
import { MdOutlineWifiCalling } from "react-icons/md";
import { MdOutlineCallEnd } from "react-icons/md";
import "./videocallroom.css"
import  ReactPlayer from "react-player"

const peer=PeerService()

const Room = () => {
    const [mystream, setMystream] = useState()
    const {id} = useParams()
    const location = useLocation()
    const receiverid = location.state?.remoteid
    const [remotestream, setremotestream] = useState()
    const [callended, setCallended] = useState(false)
    const videoRef = useRef(null);
    const remoteVideoRef=useRef(null)
    const socket=useSocket()
    var receiverSocketid=''
    console.log(receiverSocketid)
    console.log(remotestream)
    console.log(mystream)

    const sendstreams = useCallback(() => {
        console.log("works")
        if(peer && mystream){
        for (const track of mystream.getTracks()) {
                        peer.peer.addTrack(track, mystream)
                        console.log("added track")
                    }
                }
    },[mystream])

    if(mystream)
    console.log(mystream?.getTracks())

    if(remotestream)
        console.log(remotestream?.getTracks())

    const startcall = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        //sendstreams()
        setMystream(stream)
        const offer = await peer.getoffer()
        socket.emit("start-call",{remoteid:receiverid,offer,roomid:id})
    }

    /*const rejectCall = () => {
        socket.emit("call-ended", caller_socketid)
    }*/

    const callaccepted = async(answer) => {
        //console.log("Before setting remote desc:", peer.peer.signalingState);
        await peer.setremoteDescription(answer)
        //console.log("Before setting remote desc:", peer.peer.signalingState);
    }

    

    const callEnded = () => {
        setCallended(true)
        if (mystream)
        {
            mystream?.getTracks().forEach(track => track.stop());
            setMystream(null)
        }
        if (remotestream)
            setremotestream(null)

        // Close and reset peer
        peer?.close?.();
    }

    const handlenegoneeded = async () => {
        console.log("nego-needed")
        const offer = await peer.getoffer()
        console.log("offer",receiverSocketid)
        socket.emit("nego-needed",{ offer, remote_socketid:receiverSocketid})
    }

    const negodone = async (answer) => {
        console.log("nego-done",answer)
        //console.log("Before setting remote desc:", peer.peer.signalingState);
        await peer.setremoteDescription(answer)
        //console.log("Before setting remote desc:", peer.peer.signalingState);
    }

    useEffect(()=>{
        socket.on("get-receiver-socket-id",(receiver_socketid)=>receiverSocketid=receiver_socketid)

        return()=>socket.off("get-receiver-socket-id")
    },[socket])

    useEffect(()=>{
       sendstreams()
    },[mystream])

    useEffect(()=>{
        peer.peer.addEventListener("negotiationneeded",handlenegoneeded)

        peer.peer.onicecandidate = (event) => {
            if (event.candidate) {
                socket.emit("ice-candidate", {
                    to: receiverSocketid,
                    candidate: event.candidate,
                });
            }
        };
        

    },[peer.peer])

    useEffect(() => {

        socket.on("call-accepted", ({answer,caller_socketid}) => {
            console.log("call-accepted")
            console.log(answer)
            callaccepted(answer)
        })

        socket.on("call-ended", () => {
            callEnded()
        })

        socket.on("nego-done", (answer) => {
            negodone(answer)
        })

        socket.on("ice-candidate", ({ candidate }) => {
            if (candidate) {
                peer.peer.addIceCandidate(new RTCIceCandidate(candidate));
            }
        });
        

        return()=>{
            socket.off("answer-call")
            socket.off("call-accepted")
            socket.off("call-ended")
            socket.off("nego-done")
            socket.off("ice-candidate")
        }
    },[socket])

    useEffect(() => {
        if (!peer?.peer) return;

        const handleTrack = async ev => {
        console.log("Got tracks",ev);
        const remotestream = ev.streams[0];
        setremotestream(remotestream);
        };

        peer.peer.addEventListener('track', handleTrack);

        return () => {
        peer.peer.removeEventListener('track', handleTrack);
        };
          
    },[peer.peer])

    const peernego = async ({offer, remote_socketid}) => {
        console.log("peernego offer-",offer)
        sendstreams()
        const answer = await peer.getAnswer(offer)
        console.log(offer,remote_socketid) 
        //console.log(peer.peer.localDescription)
        socket.emit("nego-final", { answer, remote_socketid})
}

    useEffect(() => {
        socket.on("peer-nego-needed", ({offer, remote_socketid}) => {
        peernego({offer, remote_socketid})

 })},[socket])

    /*useEffect(() => {
        // Assign the stream to the video element once it is available
        if (mystream && videoRef) {
          videoRef.current.srcObject = mystream;
        }
      }, [mystream]);

      useEffect(()=>{
        if(remotestream && remoteVideoRef){
           remoteVideoRef.current.srcObject=remotestream
        }
     },[remotestream])*/
     console.log(peer.peer)
    return (
        <div>
            <div className="media-streams">
                {mystream && (<ReactPlayer url={mystream} playing={true} muted={true}idth="300px" height="200px" />)}
                {remotestream &&(<ReactPlayer url={remotestream} ref={remoteVideoRef} playing={true} width="300px" height="200px" style={{ marginTop: '20px' }}/>)}
            </div>
                <div className="callbtns">
                <div className="btn"><MdOutlineWifiCalling className="call-icon"  color="green" size={27}/><p onClick={startcall} style={{color:"green"}}>Call</p></div>
                <div className="btn"><MdOutlineCallEnd className="call-icon" color="red" size={27}/><p onClick={callEnded} style={{color:"red"}} >End</p></div>
                </div>
        </div>
    )
}

export default Room