import React, { useState, useEffect } from "react";
// import "./App.css"
import "../../App.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import CurrentDateTime from "../Header/CurrentDate.jsx"
import Header from "./Header.jsx";

const Chatbox = () => {
  const { from, to } = useParams();
  // const { to } = useParams();
  const { handleSubmit, register, reset } = useForm();
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [currentUser , setCurrentUser] = useState([])
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // current user
  const accessToken = useSelector((state) => state.auth.user?.accessToken);
  // const currentUser = useSelector((state) => state.auth.user?.user);


// console.log("to",to)
  
  useEffect(()=>{
    const fatchcurrentUser = async () => {
      try {
        
        const getcurrentUser = await axios.get(`http://localhost:8000/api/users/current-user`,{
          headers:{
            "Authorization":`Bearer ${accessToken}`,
          }
        })

        // console.log("getcurrentUser.data.data.curentUser",getcurrentUser.data.data.curentUser)
        setCurrentUser(getcurrentUser.data.data.curentUser)
      } catch (error) {
        console.error("Error fetching search results", error);
        
      }

    }
    fatchcurrentUser();
  },[accessToken]);


  





  useEffect(() => {
    const fatchChats = async () => {
      try {

        const response = await axios.get(`http://localhost:8000/api/chatMessage/${from}/${to}`,{
          headers: {
            "Authorization": `Bearer ${accessToken}`,
          },
        });

        console.log("gett chats",response.data.data.chatMessages)
        setChats(response.data.data.chatMessages)
        setLoading(false);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
        setLoading(false);
        
      }

    };
    fatchChats()

  },[from, to,accessToken])



  const addMessageToChat = (newMessage) => {
    setChats((prevMessages) => [...prevMessages, newMessage]);
  };


  
  const onSubmit = async (data) => {
    try {


      const newMessage = {
        from: from,
        to: to,
        message: data.message.trim(),
        createdAt: new Date().toISOString(), // Optional: Add a timestamp for immediate display
      };


      addMessageToChat(newMessage);
      console.log("new magges",newMessage)


      const response = await axios.post(
        `http://localhost:8000/api/chatMessage/send`,
        {
          newMessage
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // fatchChats()
      // setMessage("");
      // console.log("response.data",response.data.data.addMessage)
      // setChats(response.data.data.addMessage)
      reset();
      

    } catch (error) {
      console.log(error.message);
      
    }
  };


 





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





  // time format
  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const options = {
        // year: 'numeric',
        // month: '2-digit',
        // day: '2-digit',
        // weekday:"long",
        hour: '2-digit',
        minute: '2-digit',
        // second: '2-digit',
        hour12: true
    };
    return date.toLocaleString('en-US', options);
};



  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="Chatbox w-[23vw] h-[100vh] bg-gray-200 rounded-xl overflow-hidden fixed z-50 mt-28 ml-[73%]">
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

      {/* new learnig for page overflow scroling */}
      <div className="bodyData mt-[7px] overflow-y-auto h-[calc(78vh-100px)]">
        <div>
          <div>
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
          <h2>Chat between {from} and {to}</h2>
        </div>
        <div className="flex items-start justify-between px-5 mt-5 mb-10">
        <h1 >Other</h1>
        <h1 >You</h1>
        </div>
        <div>

          <div>

            {chats.map((chat) => (
              
              <div
                key={chat._id}
                style={{
                  textAlign: chat.from === currentUser._id ? "right" : "left",
                }}
              >
               
                <div className="px-7">
                  <strong className=" bg-gray-300 w-44 rounded-lg pl-1 mt-5 flex items-center justify-start gap-4 font-normal">
                    {chat.from === currentUser._id ? "" : "other user"}
                  </strong>{" "}
                  <div className="font-semibold pl-2">
                  {chat.message}
                  </div>
                </div>
               
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-end pr-3 pb-5">Seen</h1>  
      </div>

      <footer className="footerbox flex items-center justify-evenly mt-10 w-[22vw] bg-gray-200 z-50">
        <i className="fa-solid fa-circle-plus text-4xl"></i>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Type a message"
            className="w-[13vw] h-16 rounded-full"
            {...register('message', { required: true })}
          />
          <i className="fa-solid fa-arrow-up-long bg-gray-500 py-4 px-6 ml-2 rounded-full" onClick={handleSubmit(onSubmit)}></i>
        </form>
      </footer>
    </div>
  );
};

export default Chatbox;






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



        {/* getchat current user */}
        

        {/* <div>
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

        </div> */}


        {/* <div className="flex items-start flex-col pl-5">
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
        </div> */}




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
