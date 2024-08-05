import React, { useState } from "react";



const Massage = ({setShereProfile ,shereProfile, chatboxpage ,setChatboxpage ,sendmessage, setSendMessage}) => {
  
  
  const toggleShareProfile = () =>{
    setShereProfile(!shereProfile)

  }

  const chatboxfun = () =>{
    setChatboxpage(!chatboxpage)
  }

  const sendMessagefns = () =>{
    setSendMessage(!sendmessage)

  }

  return (
    <div className="w-[22vw] h-[85vh] bg-gray-200 rounded-xl fixed z-50 ">
      <div className="flex items-center justify-between pr-5 pt-5 font-medium text-2xl">
        <h1></h1>
        <h1>Inbox</h1>
        <i class="fa-solid fa-ellipsis"></i>
      </div>
      <div className="flex items-start flex-col gap-7 ml-8">
        <div className="mt-12">
        <button onClick={sendMessagefns}><form>
            <p className="flex items-center justify-center">
              <i class="fa-solid fa-magnifying-glass bg-green-300 h-12 pt-4 pl-3 rounded-s-lg"></i>
              <input
                type="search"
                name="search"
                id="search"
                className="w-[18vw] h-12 rounded-e-lg bg-green-300"
              />
            </p>
          </form></button>
        </div>
        <div className="text-2xl  hover:bg-green-300 py-5 rounded px-2 w-[20vw]">
        <button onClick={sendMessagefns}><p>
            <i class="fa-regular fa-pen-to-square bg-red-600 p-5 rounded-full"></i>{" "}
            New Message
          </p></button>
        </div>
        <h1 className="text-xl">Messages</h1>

        <button onClick={chatboxfun}>
          {/* {chatboxpage ? (""):( */}
        <div className="flex items-center justify-start gap-5 hover:bg-green-300 py-5 px-2 rounded w-[20vw]">
          <h1 className="bg-blue-600 py-2 px-5 rounded-full">s</h1>
          <div className="flex items-start flex-col">
            <h1 className="font-semibold text-xl">shubham</h1>
            <div className="flex items-start gap-20">
              <h1>i am fine bro .....</h1>
              <h1>26m</h1>
              <i class="fa-solid fa-xmark opacity-0 hover:opacity-100"></i>
            </div>
          </div>
        </div>
        {/* )} */}
        </button>
  
        <button onClick={toggleShareProfile}>
          {shereProfile ? ( "Hide Massage") 
          :( <div className="flex items-center gap-5 text-xl  hover:bg-green-300 py-5 rounded px-2 w-[20vw]">
          <i class="fa-solid fa-user-plus bg-gray-300 px-5 py-5 rounded-full"></i>
          <div className="text-start">
            <h1 className="font-semibold">Invite your friends</h1>
            <h1>connect to start chatting</h1>
          </div>
        </div>
       )}
        </button>
      
      </div>
    </div>
  );
};

export default Massage;
