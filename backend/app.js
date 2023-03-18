import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import morgan from "morgan";
import cors from "cors"
import ConnectDB from "./config/dbConnect.js";
import { corsOptions } from "./config/corsOptions.js";
import userRoutes from "./routes/userRoutes.js"
const PORT = process.env.PORT || 4000;

const app = express()

app.use(cors(corsOptions))
app.use(express.json())

ConnectDB()

// middleware Request checker
app.use(morgan("dev"));

app.get('/', function (req, res) {
  res.send(`This is the server running on local port: ${PORT}`)
})

app.use('/users', userRoutes)
  

app.listen(PORT, ()=>console.log(`Server is running on port: ${PORT}`))