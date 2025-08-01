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
app.use(express.json())

app.use('/api/notes',notesRouters);

app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
});