import dotenv from "dotenv"
import connectDB from "../backend/db/IndexDB.js"
import {app} from "./App.js"
import {ChatMessage} from "./models/ChatMessage.model.js"
import { User } from "./models/User.model.js"


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
      methods: ["GET", "POST","PUT"],
    },
  });

// io.on('connection', (socket) => {
//     console.log('New client connected');
  
//     socket.on('sendMessage', (data) => {
//       const {from, to, message } = data;
      
//       io.emit('receiveMessage', {  from, to, message, createdAt: new Date(), isRead: false });;
//       // io.emit('receiveMessage', message); // Broadcast to all clients
//     });
  
//     socket.on('disconnect', () => {
//       console.log('Client disconnected');
//     });
//   });


io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('sendMessage', async (data) => {
      const { from, to, message} = data;
      
      try {
          // Fetch the 'from' user details
          const fromUser = await User.findById(from).select('-password'); // Exclude password field

          if (!fromUser) {
              console.error('User not found');
              return;
          }


          // Emit the message with populated 'from' details
          io.emit('receiveMessage', { 
              from: fromUser, 
              to, 
              message, 
              createdAt: new Date(), 
              isRead: false
          });

           // Listen for when the recipient reads the message
        //    socket.on('readChat', async () => {
        //     await ChatMessage.updateMany(
        //         { from, to, isRead: false },
        //         { $set: { isRead: true } }
        //     );

        //     // Notify the sender that the message was read
        //     io.emit('messageRead', { from, to });
        // });


      } catch (error) {
          console.error('Error fetching user details:', error);
      }
  });

  socket.on('disconnect', () => {
      console.log('Client disconnected');
  });
});






// io.on('connection', (socket) => {
//   console.log('New client connected');

//   socket.on('sendMessage', async (newMessage) => {
//     try {
//       // Save the message to the database
//       const chatMessage = new ChatMessage({
//         from: newMessage.from,
//         to: newMessage.to,
//         message: newMessage.message,
//         createdAt: new Date(),
//         isRead: false
//       });

//       await chatMessage.save();

//       // Broadcast the message to all clients
//       io.emit('receiveMessage', chatMessage);
//     } catch (error) {
//       console.error('Error sending message:', error.message);
//     }
//   });

//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });
// });


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