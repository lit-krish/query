import userreducer from "./user.js";
import { combineReducers } from "redux";
import { teacherreducer } from "./teacher.js";

const rootreducer=combineReducers({
    userreducer,
    teacherreducer
})

export default rootreducer