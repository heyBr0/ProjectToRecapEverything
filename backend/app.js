import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors"
import { corsOptions } from "./config/corsOptions.js";
const PORT = process.env.PORT || 4000;

const app = express()

app.use(cors(corsOptions))

// middleware Request checker
app.use(morgan("dev"));

app.get('/', function (req, res) {
  res.send(`This is the server running on local port: ${PORT}`)
})

app.get('/about', function (req, res) {
    res.send(`About page on local port: ${PORT}`)
  })

app.listen(PORT, ()=>console.log(`Server is running on port: ${PORT}`))