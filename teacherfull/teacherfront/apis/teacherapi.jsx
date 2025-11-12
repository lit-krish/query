import axios from "axios"

const api=axios.create({
    baseURL:"http://localhost:8000",
    headers:{"Content-Type":"application/json"}
})

export const login=async(email)=>{
    console.log(email)
    return (await api.post("/login",{email}))
}

export const verify=async(email,otp)=>{
    return (await api.post("/verify",{email,otp},{withCredentials:true}))
}

export const details = async (FormData) => {
    return (await api.post("/details", FormData,{withCredentials:true}))
}

export const logout=async()=>{
    return(await api.post("/user/logout"))
}