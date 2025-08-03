import express from 'express';
// const express = require('express');
import notesRouters from './router/notesRouters.js';
import { connectDB } from './config/db.js';
import dotenv from "dotenv"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

connectDB();

//midlewire
app.use(express.json()) //this middlewire is parse JSON body: req.body

// it is a simle coustom skipMiddlewareFunction. 
app.use((req,res,next)=>{
    console.log(`req method is ${req.method} , req URL is ${req.url}`);
    next();
    
});

app.use('/api/notes',notesRouters);

app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
});