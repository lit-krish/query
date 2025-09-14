import { useEffect, useState, useRef } from "react"
import { useParams, useLocation } from "react-router-dom"
import { PeerService } from "../peer.js";
import { useSocket } from "../SocketProvider.jsx";
import { useCallback } from "react";
import ReactPlayer from "react-player"
import "./room.css";

const peer = PeerService()

const room = () => {

    const location = useLocation()

    const [mystream, setMystream] = useState(null)
    const [remotestream, setremotestream] = useState(null)
    const caller_socketid = location.state.caller_socketid
    const offer = location.state.offer

    const socket = useSocket()
    const videoRef = useRef(null);
    const remoteVideoRef = useRef(null)

    //console.log("remote", remotestream[0])
    //.log("socket", caller_socketid)
    //console.log(location.state)


    const sendstreams = useCallback(() => {
        if (mystream) {
            for (const track of mystream.getTracks()) {
                peer.peer.addTrack(track, mystream)
            }
        }
    }, [mystream])

   
    const change_ui=()=>{
        const btns=document.getElementsByClassName("callpick")
        for(let i=0;i<btns.length;i++)
        {
            btns[i].style.top="90%"
        }
    }
    
    const removeCallBtn=()=>{
        document.getElementsByClassName("accpt")[0].style.display="none"
        document.getElementsByClassName("btn2")[0].style.display="none"
    }
    const acceptCall = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({audio: true,video: true})
        setMystream(stream)
        
        change_ui()
        
        sendstreams()
        const answer = await peer.getAnswer(offer)
        socket.emit("call-accepted", { caller_socketid, answer })
        removeCallBtn()

    }
   // useEffect(()=>{
    //    acceptCall()
    //},[])

    const peernego = async ({ offer, remote_socketid }) => {
        console.log("peernego offer-", offer)
        const answer = await peer.getAnswer(offer)
        socket.emit("nego-final", { answer, remote_socketid })
    }

    const handlenegoneeded = async () => {
        console.log("nego-needed")
        const offer = await peer.getoffer()
        socket.emit("nego-needed", { offer, remote_socketid: caller_socketid })
    }

    const negodone = async (answer) => {
        console.log("nego-done", answer)
        //console.log("Before setting remote desc:", peer.peer.signalingState);
        await peer.setRemoteDescription(answer)
        console.log(peer.peer.remoteDescription)
        console.log("Before setting remote desc:", peer.peer.signalingState);
    }

    useEffect(() => {
        socket.on("peer-nego-needed", ({ offer, remote_socketid }) => {
            peernego({ offer, remote_socketid })
        })

        /*socket.on("nego-done", (answer) => {
            negodone(answer)
        })*/

        socket.on("ice-candidate", ({ candidate }) => {
            if (candidate) {
                console.log(candidate)
                peer.peer.addIceCandidate(new RTCIceCandidate(candidate));
            }
        });

        return () => {
            socket.off("peer-nego-needed")
            //socket.off("ice-candidate")
            //socket.off("nego-done")
        }
    }, [socket])

    useEffect(() => {
        if (!peer?.peer) return;

        const handleTrack = async ev => {
            console.log("Got Tracks");
            const remotestream = ev.streams[0];
            setremotestream(remotestream);
        };

        peer.peer.addEventListener('track', handleTrack);

        return () => {
            peer.peer.removeEventListener('track', handleTrack);
        };
    }, [peer.peer])

    /*useEffect(() => {
        // Assign the stream to the video element once it is available
        if (mystream && videoRef) {
            videoRef.current.srcObject = mystream;
        }
    }, [mystream]);*/

    /*useEffect(() => {
        if (remotestream && remoteVideoRef) {
            remoteVideoRef.current.srcObject = remotestream
        }
    }, [remotestream])*/

    /*useEffect(()=>{
        peer.peer.addEventListener("negotiationneeded",handlenegoneeded)

    },[peer.peer])*/

    useEffect(() => {
        sendstreams()
    }, [mystream])


    if (mystream)
        console.log(mystream?.getTracks())

    if (remotestream)
        console.log(remotestream?.getTracks())

    useEffect(() => {
        peer.peer.onicecandidate = (event) => {
            if (event.candidate) {
                console.log(event.candidate)
                socket.emit("ice-candidate", {
                    to: caller_socketid,
                    candidate: event.candidate,
                });
            }
        };
    }, [peer.peer])



    return (
        <div>
            <div className="media-streams">
                {mystream && (<ReactPlayer url={mystream} playing={true} muted={true} width="500px" height="400px" style={{ marginTop: "10rem" }} />)}
                {remotestream && (<ReactPlayer url={remotestream} playing={true} width="500px" height="400px" style={{ marginTop: "10rem" }} />)}
            </div>
            
            <div className="callpick"  >
            <div>
            <div className="btn2" onClick={acceptCall} >
                
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5" />
                </svg>
            </div>
            <p className="accpt">Accept</p></div>
            <div>
            <div className="btn1" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-plus-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5" />
            </svg>

            </div><p>Reject</p>
            </div>
            </div>
        </div>
    )
}

export default room