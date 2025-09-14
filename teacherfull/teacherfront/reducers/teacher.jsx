const userreducer=(state={data:JSON.parse(localStorage.getItem("teacher"))},action)=>{
    
    console.log(action)
    console.log(JSON.stringify(action?.data))
    switch(action.type){
        case "LOGIN":
            localStorage.setItem("teacher",JSON.stringify(action?.data))
            return {...state,data:action?.data}
        case "LOGOUT":
            localStorage.removeItem("teacher")
            return {...state,data:null}
        default:
            return state
    }
}

export default userreducer