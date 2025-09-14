import { useEffect, useState, useRef } from "react"
import { useParams, useLocation } from "react-router-dom"
import { PeerService } from "../peer.js";
import { useSocket } from "../SocketProvider.jsx";
import { useCallback } from "react";
import ReactPlayer from "react-player"

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

    const acceptCall = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        setMystream(stream)
        sendstreams()
        const answer = await peer.getAnswer(offer)
        socket.emit("call-accepted", { caller_socketid, answer })

    }


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
        await peer.setremoteDescription(answer)
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
                peer.peer.addIceCandidate(new RTCIceCandidate(candidate));
            }
        });

        return () => {
            socket.off("peer-nego-needed")
            socket.off("ice-candidate")
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
                {mystream && (<ReactPlayer url={mystream} playing={true} muted={true} idth="300px" height="200px" />)}
                {remotestream && (<ReactPlayer url={remotestream} playing={true} muted={true} idth="300px" height="200px" />)}
            </div>
            <button onClick={acceptCall}>
                Accept
            </button>
            <button >
                End Call
            </button>
        </div>
    )
}

export default room