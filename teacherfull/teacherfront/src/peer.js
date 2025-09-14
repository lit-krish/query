export const PeerService=()=>{
   let peer=null

   if(!peer)
   {
     peer=new RTCPeerConnection({
        iceServers: [
            { urls: ["stun:stun.l.google.com:19302",]},
            
            {
               urls: "turn:global.relay.metered.ca:443",
               username : "9b6ff2fa2e17b7fdde2537dd",
               credential :"hvGQtqNz68jldiaj"
            }
        ]
     })
   }

   const getoffer=async()=>{
      if(peer)
      {
        const offer=await peer.createOffer()
        const localDescription=new RTCSessionDescription(offer)
        await peer.setLocalDescription(localDescription)
        return offer
      }
   }

   const getAnswer=async(offer)=>{
    if(peer)
    {
       await peer.setRemoteDescription(offer)
       console.log(offer)
       const answer=await peer.createAnswer()
       const localDescription=new RTCSessionDescription(answer)
       await peer.setLocalDescription(localDescription)
       return answer
    }
   }

   const setRemoteDescription=async(answer)=>{
     if(peer)
     {
      const RemoteDescription =new RTCSessionDescription(answer)
      await peer.setRemoteDescription(RemoteDescription)
     }
   }

   return {
      getoffer,
      getAnswer,
      setRemoteDescription,
      peer
    };
}