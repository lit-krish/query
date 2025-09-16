import axios from "axios"

const api=axios.create({
    baseURL:"http://localhost:5000",
    headers:{"Content-Type":"application/json"}
})

export const login=async(email)=>{
    console.log(email)
    return (await api.post("/user/login",{email}))
}

export const verification=async(email,otp)=>{
    return (await api.post("/user/verification",{email,otp}))
}

export const getallteachers=async()=>{
    return (await api.get("/teachers"))
}

export const logout=async()=>{
    return(await api.post("/user/logout"))
}

export const PostQuestion=async({question})=>{
    return (await api.post("/post-question",{question}))
}
