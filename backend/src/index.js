import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from 'cors'
import cookieParser from 'cookie-parser';
import CreateAccountManager from './routes/ManagerAccountCreRoute.js'
import ManagerLogin from './routes/ManagerLogin.js';
import PatienRoute from './routes/PatientRoute.js'
import AllPatientData from './routes/AllPatientData.js'
import PantryRoute from './routes/PantryRoute.js'
import http from 'http';
import { Server } from 'socket.io';  


dotenv.config()
const app = express()
const server = http.createServer(app);

const io = new Server(server, { 
  cors: {
      origin: `${process.env.CLIENTURL}`,
      methods: ["GET", "POST"],
      credentials: true
  }
});



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
app.use('/FullPatientData',AllPatientData)
app.use('/CreatePantry', PantryRoute)



const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on the http://localhost:${PORT}`);
});

io.on('connection',(socket)=>{
  console.log("user socket id : ", socket.id);
  
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
})


export { io };
