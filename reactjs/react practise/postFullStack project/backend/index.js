const onlineUsers = {}; 
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
          console.log('Error fetching user details:', error);
      }
  });

  socket.on('disconnect', () => {
      console.log('Client disconnected');
  });
});



// // Socket.IO connection handling
// io.on("connection", (socket) => {
//     console.log("New client connected");

//     // Join room based on postId
//     socket.on("joinPost", (postId) => {
//         socket.join(postId);
//         console.log(`User joined post: ${postId}`);
//     });

//     socket.on("disconnect", () => {
//         console.log("Client disconnected");
//     });
// });


// Socket.IO connection handling
io.on("connection", (socket) => {
    console.log("New client connected");

    // Join room based on postId
    socket.on("sendComment", async (data) => {
        const {content ,owner} = data;
        try {

            const user = await User.findById(owner);
            console.log("sockedi",user)
            if(!user){
                console.error('User not found');
              return;
            }


            io.emit('recivedComment', {  
                content:content, 
                owner:user,
                createdAt: new Date(), 
            });

            
        } catch (error) {
            console.log(error.message)
            
        }
    });

    socket.on("disconnect", () => {
        console.log('Client disconnected');
    });
});








io.on('connection', (socket) => {
    console.log('a user connected');
  
    socket.on('deleteNotification', async (notificationId) => {
      try {
        // Perform your delete logic here, e.g., removing from a database
        // Assuming deleteNotificationById is a function that deletes the notification
        await deleteNotificationById(notificationId);
        
        // Notify all clients to update their notification list
        io.emit('notificationDeleted', notificationId);
      } catch (error) {
        console.error('Error deleting notification:', error);
      }
    });
  
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });


// const PORT = process.env.PORT || 8000;


// mongodb databases connection
connectDB()
.then(() => {
    server.listen(process.env.PORT || 3000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

export default io





