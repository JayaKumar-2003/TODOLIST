// const express = require('express');
// const app =  express();
// const cors = require('cors');
import  express  from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import SeedRoutes from './Routes/seedRoutes.js';
import TaskRoutes from './Routes/TaskRoutes.js';


dotenv.config();
const app = new express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('connected to db');
})
.catch((err)=>{
    console.log(err.message);
});

app.use('/api/seed',SeedRoutes);
app.use('/api/task',TaskRoutes);
app.listen(3000,()=>{
    console.log(`${'http://localhost:3000/'}`)
})

