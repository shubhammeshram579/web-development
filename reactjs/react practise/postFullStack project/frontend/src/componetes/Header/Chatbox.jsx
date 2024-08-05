import React,{useState, useEffect} from "react";
// import "./App.css"
import "../../App.css";
import { useSelector } from "react-redux";
import axios from "axios";


const Chatbox = ({setShowMassage,setChatboxpage}) => {
  const [getFromchat ,setGetFromchat] = useState([])
  const [getTochat ,setGetTochat] = useState([])
  const [error ,setError] = useState(false)
  const [loading ,setLoading] = useState(true)


  const [otherUser , setOtherUser] = useState("")



  // current user
  const accessToken = useSelector((state) => state.auth.user?.accessToken);
  const currentUser = useSelector((state) => state.auth.user?.user);


  // const gettoId = () =>{
  //   setSelectedUser(selectedUser._id)
  // }

  // const touserId = selectedUser._id

  // console.log("gettoId",gettoId)
  // console.log("touserId",touserId)


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
  useEffect(() => {
    const fatchChat = async () =>{
      try {
        const response = await axios.get(`http://localhost:8000/api/chatMessage/fromUserChat`,{
          headers:{
            "Authorization":`Bearer ${accessToken}`
          }
        });

        // console.log("fromchat",response.data.data.fromuserChat)
        console.log("fromchat data",response.data.data.fromuserChat)
        setGetFromchat(response.data.data.fromuserChat)
        // setUserId(response.data.data.fromuserChat.map((item) => item.to))

        

        setLoading(false)
      } catch (error) {
        setError(error.message)
        console.log(error.message)
        setLoading(false)
        
      }

    };
    fatchChat();

  },[accessToken]);

  useEffect(() =>{
    const Touser = localStorage.getItem("toUser");
    setOtherUser(Touser)

  })

  console.log("otherUser",otherUser)


// to user chat
  useEffect(() => {
    const fatchChat = async () =>{
      try {
        const response = await axios.get(`http://localhost:8000/api/chatMessage/toUserChat?to=${otherUser}`,{
          headers:{
            "Authorization":`Bearer ${accessToken}`
          }
        });

        console.log("fromchat",response.data.data.touserChat)
        setGetTochat(response.data.data.touserChat)
        

        setLoading(false)
      } catch (error) {
        setError(error.message)
        console.log(error.message)
        setLoading(false)
        
      }

    };
    fatchChat();

  },[accessToken]);


 



  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  const gotoMessagepage = () =>{
    setChatboxpage(false)
    setShowMassage(true)

  }
  return (
    
    <div className="Chatbox w-[23vw] h-[100vh] bg-gray-200 rounded-xl overflow-hidden fixed z-50">
      <nav className="chatboxheader flex items-center justify-around font-semibold text-2xl pt-5 ">
        <button onClick={gotoMessagepage}><i className="fa-solid fa-angle-left"></i></button>
        <h1 className="bg-green-600 py-2 px-5 rounded-full">{currentUser.fullname[0]}</h1>
        <h1>{currentUser.fullname}</h1>
        <i className="fa-solid fa-ellipsis"></i>
      </nav>
      <h1> getchat: {getFromchat.length}</h1>
      
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
            ----------------------- 8:37 PM ---------------------
          </h1>
        </div>
        <h1 className="text-end pr-3 pb-5">You</h1>
        {/* getchat current user */}

        {getFromchat.map((user) =>(<div className="flex items-center justify-end">
          <div className="flex flex-col items-end gap-2 pr-5">
          
            <h1 className="bg-gray-400 py-3 px-5 rounded-full text-end mb-5">
              {user.message} </h1>
          </div>
        </div>))}

        <h1 className="text-end pr-3 pb-5">Seen</h1>

        <div className="flex items-start flex-col pl-5">
          {getTochat.map((t) =>(
             <h1 className="ml-24">hello{t.message}</h1>
            
          ))}
          <h1 className="ml-24">Shubham Meshram</h1>
          <div className="flex items-center gap-4">
            <h1 className="py-3 px-4 bg-green-400 rounded-full">S</h1>
            <h1 className="py-4 px-5 bg-gray-400 rounded-full">
              I am fine, what about you?
            </h1>
          </div>
        </div>
      </div>

      <footer className="footerbox flex items-center justify-evenly mt-10 w-[22vw] bg-gray-200 z-50">
        <i className="fa-solid fa-circle-plus text-4xl"></i>
        <form action="">
          <input
            type="text"
            placeholder="Type a message"
            className="w-[13vw] h-16 rounded-full"
          />
          <i className="fa-solid fa-arrow-up-long bg-gray-500 py-4 px-6 ml-2 rounded-full"></i>
        </form>
      </footer>
    </div>
  );
};

export default Chatbox;
