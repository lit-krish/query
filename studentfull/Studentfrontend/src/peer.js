let peer=null
export const PeerService=()=>{

   if(!peer)
   {
     peer=new RTCPeerConnection({
        iceServers: [
            {
                urls: [
                    "stun:stun.l.google.com:19302",
                    "stun:global.stun.twilio.com:3478",
                ]
            }
        ]
     })
   }

   const getoffer=async()=>{
      if(peer)
      {
        const offer=await peer.createOffer()
        console.log(offer)
        const localDescription=new RTCSessionDescription(offer)
        await peer.setLocalDescription(localDescription)
        return offer
      }
   }

   const getAnswer=async(offer)=>{
    if(peer)
    {
       await peer.setRemoteDescription(new RTCSessionDescription(offer))
       const answer=await peer.createAnswer()
       const localDescription=new RTCSessionDescription(answer)
       await peer.setLocalDescription(localDescription)
       console.log(peer.localDescription)
       return answer
    }
   }

   const setremoteDescription=async(answer)=>{
     if(peer)
     {
        const remoteDescription=new RTCSessionDescription(answer)
        await peer.setRemoteDescription(remoteDescription)
        console.log(peer.remoteDescription)
        return peer
     }
   }

   
    

   return {
      getoffer,
      getAnswer,
      setremoteDescription,
      peer
    };
}