import express from "express"
import {registerandlogin,verifyotp,completeyourprofile,logout} from "../Controllers/User.js"
import { verifytoken } from "../Middleware/user.js"

const routes=express.Router()

routes.post("/login",registerandlogin)
routes.post("/verification",verifyotp)
routes.post("/complete-your-profile",verifytoken,completeyourprofile)
routes.post("/logout",logout)

export default routes
