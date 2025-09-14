import express from "express"
import { getTeachers } from "../Controllers/Teacher.js"

const routes=express.Router()

routes.get("/teachers",getTeachers)

export default routes