import express from "express";
import { getAllUsers, createUser } from "../controllers/userController.js";
 import { userValidation } from "../middleware/userValidation.js"; 

const router = express.Router()

router.get("/", getAllUsers)

router.post("/", userValidation, createUser) 


export default router