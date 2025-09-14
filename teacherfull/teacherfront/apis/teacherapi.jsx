import axios from "axios"

const api=axios.create({
    baseURL:"https://queryconnect.onrender.com",
    headers:{"Content-Type":"application/json"}
})

export const login=async(email)=>{
    console.log(email)
    return (await api.post("/login",{email}))
}

export const verify=async(email,otp)=>{
    return (await api.post("/verify",{email,otp}))
}

export const details = async (FormData) => {
    return (await api.post("/details", FormData, {
        headers: {
            "Content-Type": "multipart/form-data", //for changing the data to form data/multipart data
        },
    }
    ))
}