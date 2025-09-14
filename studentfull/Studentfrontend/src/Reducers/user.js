const userreducer=(state={data:JSON.parse(localStorage.getItem("User"))},action)=>{
    
    console.log(action)
    console.log(JSON.stringify(action?.data))
    switch(action.type){
        case "LOGIN":
            localStorage.setItem("User",JSON.stringify(action?.data))
            return {...state,data:action?.data}
        case "LOGOUT":
            localStorage.removeItem("User") 
            return {...state,data:null}
        default:
            return state
    }
}

export default userreducer