import dotenv from "dotenv"
import connectDB from "../backend/db/IndexDB.js"
import {app} from "./App.js"


// this are server set for same time get chats from other user using this libriey
import http from "http"
import { Server } from 'socket.io';


dotenv.config({
    path: "./.env"
})



// set up of funcanality
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173", // Replace with your frontend URL
      methods: ["GET", "POST"],
    },
  });

io.on('connection', (socket) => {
    console.log('New client connected');
  
    socket.on('sendMessage', (message) => {
      // const { from, message } = data;
      
      // io.emit('receiveMessage', { from, message, createdAt: new Date() });;
      io.emit('receiveMessage', message); // Broadcast to all clients
    });
  
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });


// mongodb databases connection
connectDB()
.then(() => {
    server.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})