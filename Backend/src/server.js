import express from 'express';
// const express = require('express');
import notesRouters from './router/notesRouters.js';
import dotenv from "dotenv"

// All rocal import. 
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';
import cors from "cors"


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001 ;

// connectDB();

//midlewire
app.use(cors({
    origin:"http://localhost:5173"
}));     // it must present in the biging.
app.use(express.json()); //this middlewire is parse JSON body: req.body
app.use(rateLimiter);



// it is a simle coustom skipMiddlewareFunction. 
// app.use((req,res,next)=>{
//     console.log(`req method is ${req.method} , req URL is ${req.url}`);
//     next();

// });

app.use('/api/notes', notesRouters);


connectDB().then(() => {

    app.listen(PORT, () => {
        console.log("Server is running on port:", PORT);
    });
});