import React, { useState, useEffect,useRef } from "react";
import "..//../App.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CurrentDateTime from "../Header/CurrentDate.jsx";
import "..//../Responsive.css"
// import { formatDistanceToNow } from "date-fns";
import { format, formatDistanceToNow, isToday } from "date-fns";


// same time fatch chats librily
import io from "socket.io-client";

const socket = io("http://localhost:8000");



const Chatbox = () => {
  const { from, to } = useParams();
  const { handleSubmit, register, reset } = useForm();
  const [chats, setChats] = useState([]);
  const [visible ,setVisible] = useState(false)
  const [currentUser, setCurrentUser] = useState([]);
  const latestMessageRef = useRef(null); // Ref to track the latest message


  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate()
  const currentPath = window.location.pathname;

  // current user accessToken
  const accessToken = useSelector((state) => state.auth.user?.accessToken);
  



  // Animation set time
  useEffect(()=>{
    setTimeout(()=>{
      setVisible(true)

    },100)
  })

// current user 
  useEffect(() => {
    const fatchcurrentUser = async () => {
      try {
        const getcurrentUser = await axios.get(
          `/api/users/current-user`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setCurrentUser(getcurrentUser.data.data.curentUser);
      } catch (error) {
        console.error("Error fetching search results", error);
      }
    };
    fatchcurrentUser();
  }, [accessToken]);



  





  // // fatch messages chats
  useEffect(() => {
    const fatchChats = async () => {
      try {
        const response = await axios.get(
          `/api/chatMessage/${from}/${to}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log("gett chats", response.data.data.chatMessages);
        setChats(response.data.data.chatMessages);
        // socket.emit("sendMessage", response.data.data.chatMessages);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
        setLoading(false);
      }
    };
    fatchChats();
  }, [from, to, accessToken]);



  

  // get chat same time to other user funcnality
  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setChats((prevChats) => [...prevChats, data]);
      scrollToLatestMessage();
    });

    return () => socket.off("receiveMessage");
  }, []);



  // onsubmit buttne for sed message
  const onSubmit = async (data) => {
    try {
      const newMessage = {
        from: from,
        to: to,
        message: data.message.trim(),
        createdAt: new Date().toISOString(),
        isRead: false,
      };

      // Add the new message to the current chat state
      // setChats((prevChats) => [...prevChats, newMessage])



      // send message router
      await axios.post(
        `/api/chatMessage/send`,
        newMessage,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      // setMessage("");

      // same time get message othor user
      console.log("newmessage",newMessage)
      socket.emit("sendMessage", newMessage);
      scrollToLatestMessage();
      reset();
    } catch (error) {
      console.log(error.message);
    }
  };


  


  // chat refress
  const scrollToLatestMessage = () => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  






  useEffect(()=>{
     // Mark the message as read
     const readchats = async () =>{
     try {
      await axios.put(`/api/chatMessage/readchat/${from}/${to}`,{
      },{
        headers:{
          "Authorization":`Bearer ${accessToken}`
        }
      });

      setChats((prevChats) =>
        prevChats.map(chat =>
          chat.from === currentUser._id && chat.to === to ? { ...chat, isRead: true } : chat
        )
      );

      console.log("read succefully")
    } catch (error) {
      console.error('Failed to mark as read:', error);
    }

  };
  readchats()
},[from,to]);




  

  // time data format
  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const options = {
      // year: 'numeric',
      // month: '2-digit',
      // day: '2-digit',
      // weekday:"long",
      hour: "2-digit",
      minute: "2-digit",
      // second: '2-digit',
      hour12: true,
    };
    return date.toLocaleString("en-US", options);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  // const handleRefresh = () => {
  //   window.location.reload();
  // };

  const handleRefresh = () => {
    navigate('/'); // Redirect to another page temporarily
    setTimeout(() => {
      navigate(`/otherUser/${from}/${to}`); // Navigate back to the current page after a brief delay
    }, 0);
  };

  // const handelVideoCall = () => {
  //   navigate(`/videoCall/${from}/${to}`)
  // }

  // const startCall = () => {
  //   if (currentUser._id) {
  //     navigate(`/videoCall/${currentUser._id}`);
  //   } else {
  //     alert("Please enter a valid user ID to call!");
  //   }
  // };





  return (
    <div id="chatBox" className={`Chatbox w-[23vw] h-[100vh] bg-gray-200 rounded-xl overflow-hidden fixed z-50 mt-28 ml-[73%]  ${visible ? "visible" : ""}`}>
      <nav className="chatboxheader flex items-center justify-around font-semibold text-2xl pt-5 ">
        <Link to="/message">
          <i className="fa-solid fa-angle-left"></i>
        </Link>
        <h1 className="bg-green-600 py-2 px-5 rounded-full">
          {currentUser.fullname[0]}
        </h1>
        <h1>{currentUser.fullname}</h1>
        <i className="fa-solid fa-ellipsis"></i>
      </nav>
      {/* <h1> getchat: {getFromchat.length}</h1> */}

      {/* new learnig for page overflow scroling  hendeling*/}
      <div id="chatMessagebox" className="bodyData mt-[7px] overflow-y-auto h-[calc(78vh-100px)]">
        <div>
          <div>
            {/* curentUser info */}
            <div className="flex flex-col items-center justify-center">
              <div className="mt-10">
                <i className="fa-solid fa-hands-clapping ml-48 text-yellow-600 py-2 px-3 text-xl bg-gray-300 rounded-full"></i>
                <h1 className="py-14 px-16 rounded-full bg-gray-400 ml-28 mt-[-20px]">
                  {currentUser.fullname[0]}{" "}
                </h1>
              </div>
              <div>
                <i className="ri-message-3-fill bg-gray-300 py-2 px-3 rounded-lg"></i>
                <h1 className="py-14 px-16 rounded-full bg-green-400 mr-32 mt-[-38px] ">
                  {currentUser.fullname[0]}
                </h1>
              </div>
            </div>
            <div className="text-center mt-10 mb-10">
              <h1 className="font-semibold text-xl">{currentUser.fullname}</h1>
              <h1>This could be the beginning of something good</h1>
            </div>
          </div>
        </div>
        <div className="border-t-[3px]">
          <h1 className="text-center">
            <CurrentDateTime />
          </h1>
          {/* <h2>Chat between {from} and {to}</h2> */}
        </div>

        {/* chat page  */}
        <div className="flex items-start justify-between px-5 mt-5 mb-10">
          <h1>Other</h1>
          <h1>You</h1>
        </div>
        <div>

          {/* get chats */}
          <div className="px-5">
            {chats.map((chat,index) => (
              <div
                key={chat._id} 
                ref={chat._id === chats.length - 1 ? latestMessageRef : null}
                className={`flex ${
                  chat.to !== currentUser._id ? "justify-end" : "justify-start"
                }`}
                
              >
                <div
                  className={`bg-gray-300 rounded-lg px-4 py-2 mt-7 max-w-xs ${
                    chat.to !== currentUser._id ? "text-right" : "text-left"
                  }`}
                >
                  <div className="font-normal text-sm text-gray-700">
                    {chat.to !== currentUser._id ? "" : chat.from.fullname}
                  </div>
                  <div className="font-semibold text-black flex items-center justify-between gap-2">
                    {chat.message}

                    {/* date and time formate */}
                    <div className="text-xs text-gray-500 mt-1">
                      {
                        isToday(new Date(chat.createdAt))
                          ? format(new Date(chat.createdAt), "hh:mm a") // Show time if the message is from today
                          : formatDistanceToNow(new Date(chat.createdAt), {
                              addSuffix: true,
                            }) // Show relative time if the message is from a previous day
                      }
                      
                      {chat.isRead && <span>✔</span>} {/* Show double checkmark if read */}
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
        <h1 className="text-end pr-3 pb-5 mt-14">Seen</h1>
      </div>

      <footer id="chatFoter" className="footerbox flex items-center justify-evenly mt-10 w-[22vw] bg-gray-200 z-50">
        <i className="fa-solid fa-circle-plus text-4xl"></i>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Type a message"
            id="SendChatMessage"
            className="w-[13vw] h-16 rounded-full"
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
            {...register("message", { required: true })}
          />
          <Link to={`/otherUser/${from}/${to}`}>
            <i
              className="fa-solid fa-arrow-up-long bg-gray-500 py-4 px-6 ml-2 rounded-full"
              onClick={handleSubmit(onSubmit)}
            ></i>
           
          </Link>
        </form>
        <button onClick={handleRefresh}>refp</button>
      </footer>
    </div>
  );
};

export default Chatbox;


// const sendMessage = () => {
  //   const newMessage = { from, message: message.trim(), createdAt: new Date(), isRead: false };
  //   socket.emit('sendMessage', newMessage);
  //   setChats((prevChats) => [...prevChats, newMessage]);
  //   setMessage("");
  //   scrollToLatestMessage();
  // };


// useEffect(() => {
  //   const interval = setInterval(() => {
  //     fatchChats(); // Function to fetch latest messages from the server
  //   }, 5000); // Poll every 2 seconds

  //   return () => clearInterval(interval);
  // }, []);


{/* {formatDistanceToNow(new Date(chat.createdAt), {
                      addSuffix: true,
                    })}
                     {format(new Date(chat.createdAt), 'hh:mm a')} */}





// useEffect(() => {
//   const fatchChat = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8000/api/chatMessage/fromUserChat/${userId}`,{
//           headers: {
//             "Authorization": `Bearer ${accessToken}`,
//           },
//         }
//       );

//       console.log("response.data.data",response.data.data)
//       const { fromuserChat, toUserChat } = response.data.data;
//       // Merge and sort messages by createdAt
//       const allMessages = [...fromuserChat, ...toUserChat].sort(
//         (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
//       );

//       console.log("allMessages", allMessages);
//       setChats(allMessages);

//       setLoading(false);
//     } catch (error) {
//       setError(error.message);
//       console.log(error.message);
//       setLoading(false);
//     }
//   };
//   fatchChat();
// }, [accessToken]);

// useEffect(()=>{
//   const fatchredchat = async () =>{
//     try {

//       const response = await axios.put(`http://localhost:8000/api/chatMessage/readchat/${from}/${to}`,{},{
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },

//       });

//     } catch (error) {
//       console,log(error.message)

//     }
//   }
//   fatchredchat()

// },[from, to])

// <div className="flex items-end justify-end flex-col">
//                 <h2>Sent Messages</h2>
//                 {Fromchat.map(chat => (
//                     <div key={chat._id} className="bg-gray-400 py-4 px-5 mt-5">{chat.message}</div>
//                 ))}
//             </div>
//             <div className="flex items-start justify-start flex-col">
//                 <h2>Received Messages</h2>
//                 {touserchat.map(chat => (
//                     <div key={chat._id} className="bg-gray-400 py-4 px-5 mt-5 ml-5">{chat.message}</div>
//                 ))}
//             </div>

{
  /* getchat current user */
}

{
  /* <div>
        {getFromchat.map((user) => (
          <div className="flex items-center justify-end">
            <div className="flex flex-col items-end gap-2 pr-5">
              <h1 className="bg-gray-400 py-3 px-5 rounded-full text-end mb-5">
                {user.message}{" "}
              </h1>
              <h1>{user._id}</h1>
            </div>
          </div>
        ))}
        </div>
        <div className="flex items-start justify-start flex-col">
        {touserchat.map((user) => (
          <div className="flex items-center justify-end">
            <div className="flex flex-col items-end gap-2 pr-5">
              <h1 className="bg-gray-400 py-3 px-5 rounded-full text-end mb-5">
                {user.message}{" "}
              </h1>
              <h1>{user._id}</h1>
            </div>
          </div>
        ))}

        </div> */
}

{
  /* <div className="flex items-start flex-col pl-5">
          {getTochat.map((t) => (
            <div className="flex items-center justify-start gap-5 mt-5">
            
                <h1 className="py-3 px-4 bg-green-400 rounded-full">S</h1>
                <div className="flex items-center justify-start flex-col">
                  <h1>Shubham Meshram</h1>
                  <h1 className="py-4 px-5 bg-gray-400 rounded-full">
                    {t.message}
                  </h1>
                  <h1>{t.to}</h1>
                </div>
           
            </div>
          ))}
        </div> */
}

// gett alla chatts
// useEffect(() =>{
//   const fatchChats = async () =>{
//     try {
//       const response = await axios.get(`http://localhost:8000/api/chatMessage/getchats`,{
//         headers:{
//           "Authorization":`Bearer ${accessToken}`
//         }
//       });
//       console.log(response.data.data.getchats)
//       setGetchats(response.data.data.getchats)

//     } catch (error) {
//       console.log(error.message)

//     }

//   };
//   fatchChats()

// },[accessToken]);

// current user chat

// to user chat
// useEffect(() => {
//   const fatchChat = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8000/api/chatMessage/toUserChat/${userId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       const newMessage = response.data.data;
//       setGetTochat((prevMessages) =>
//         [...prevMessages, newMessage].sort(
//           (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
//         )
//       );

//       setLoading(false);
//     } catch (error) {
//       setError(error.message);
//       console.log(error.message);
//       setLoading(false);
//     }
//   };
//   fatchChat();
// }, [accessToken]);





// const readchats = async () =>{
//   try {
//    await axios.put(`http://localhost:8000/api/chatMessage/readchat/${from}/${to}`,{
//    },{
//      headers:{
//        "Authorization":`Bearer ${accessToken}`
//      }
//    });

//    setChats((prevChats) =>
//           prevChats.map(chat =>
//             chat.from === currentUser._id && chat.from === to ? { ...chat, isRead: true } : chat
//           )
//         );

//    console.log("read succefully")
//  } catch (error) {
//    console.error('Failed to mark as read:', error);
//  }

// };


// chat read marks 
  // const markAsRead = async () => {
  //   try {
  //     await axios.put(`http://localhost:8000/api/chatMessage/readchat/${from}/${to}`,{
  //     },{
  //       headers:{
  //         "Authorization":`Bearer ${accessToken}`
  //       }
  //     });
  //     // Update local state to mark messages as read
  //     setChats((prevChats) =>
  //       prevChats.map(chat =>
  //         chat.from !== currentUser._id && chat.to === to ? { ...chat, isRead: true } : chat
  //       )
  //     );
  //   } catch (error) {
  //     console.error('Failed to mark messages as read:', error);
  //   }
  // };
