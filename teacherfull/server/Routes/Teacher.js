import express from "express"
import {loginandsignup,verify,detail} from "../Controllers/Teacher.js"
import {verifytoken} from "../middleware/teacher.js"

const routes=express.Router()

routes.post("/login",loginandsignup)
routes.post("/verify",verify)
routes.post("/details",verifytoken,detail)

export default routes
