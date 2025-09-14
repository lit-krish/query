import {useSelector,useDispatch} from "react-redux"
import { logout } from "./API/index.js"
import { useEffect } from "react"

const Profile=()=>{
    const user=useSelector(state=>state.userreducer.data)
    const  dispatch=useDispatch()

    const logout_user=async()=>{
       await logout()
       dispatch({type:"LOGOUT"}) 
    }

    useEffect(()=>{

       const timer=setTimeout(()=>{
        logout_user()
       },3600000)

       return()=>clearTimeout(timer)
    },[])

    return(
        <div>
          <p>User:{user?.email}</p>
          <button type="button" onClick={logout_user}>LOGOUT</button>
        </div>
    )
}

export default Profile