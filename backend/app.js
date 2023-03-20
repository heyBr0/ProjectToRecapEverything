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


ConnectDB()


app.use(cors(corsOptions)) 
app.use(express.json());

app.use(express.urlencoded({extended:true}))

// middleware Request checker
app.use(morgan("dev"));

app.get('/', function (req, res) {
  res.send(`This is the server running on local port: ${PORT}`)
})

app.use('/users', userRoutes)
  
// universal error handler middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ success: false, message: error });
});

app.listen(PORT, ()=>console.log(`Server is running on port: ${PORT}`))