export const teacherreducer=(state=null,action)=>{
    switch(action.type){
        case "GET_TEACHERS":
            return {...state,data:action.data}
        default:
            return state
    }
}