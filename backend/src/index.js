import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from 'cors'
import cookieParser from 'cookie-parser';
import CreateAccountManager from './routes/ManagerAccountCreRoute.js'
import ManagerLogin from './routes/ManagerLogin.js';
import PatienRoute from './routes/PatientRoute.js'

dotenv.config()
const app = express()

app.use(cors({
    origin:`${process.env.CLIENTURL}`,
    credentials: true, 
  }))

app.use(cookieParser())
app.use(express.json())

mongoose.connect(process.env.MONGOURL)
.then(()=>{
    console.log("mongodb connected successfully");
    
})
.catch((err)=>{
    console.log(err);
    
})


app.use('/CreateManagerAccount',CreateAccountManager)
app.use('/ManagerLogin',ManagerLogin)
app.use('/CreatePatient',PatienRoute)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on the http://localhost:${PORT}`);
});