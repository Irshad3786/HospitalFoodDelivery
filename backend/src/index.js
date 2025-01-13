import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from 'cors'
import cookieParser from 'cookie-parser';

dotenv.config()
const app = express()

app.use(cors({
    origin:`${process.env.CLIENTURL}`,
    credentials: true, 
  }))

app.use(cookieParser());
app.use(express.json())

mongoose.connect(process.env.MONGOURL)
.then(()=>{
    console.log("mongodb connected successfully");
    
})
.catch((err)=>{
    console.log(err);
    
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});