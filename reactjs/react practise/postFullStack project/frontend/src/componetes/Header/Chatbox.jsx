import React from "react";
// import "./App.css"
import "../../App.css";

const Chatbox = () => {
  return (
    <div className="Chatbox w-[23vw] h-[100vh] bg-gray-200 rounded-xl overflow-hidden fixed">
      <nav className="chatboxheader flex items-center justify-around font-semibold text-2xl pt-5 ">
        <i className="fa-solid fa-angle-left"></i>
        <h1 className="bg-green-600 py-2 px-5 rounded-full">S</h1>
        <h1>Shubham Meshram</h1>
        <i className="fa-solid fa-ellipsis"></i>
      </nav>
      
      {/* new learnig for page overflow scroling */}
      <div className="bodyData mt-[7px] overflow-y-auto h-[calc(78vh-100px)]">
        <div>
          <div>
            <div className="flex flex-col items-center justify-center">
              <div className="mt-10">
                <i className="fa-solid fa-hands-clapping ml-48 text-yellow-600 py-2 px-3 text-xl bg-gray-300 rounded-full"></i>
                <h1 className="py-14 px-16 rounded-full bg-gray-400 ml-28 mt-[-20px]">
                  S{" "}
                </h1>
              </div>
              <div>
                <i className="ri-message-3-fill bg-gray-300 py-2 px-3 rounded-lg"></i>
                <h1 className="py-14 px-16 rounded-full bg-green-400 mr-32 mt-[-38px] ">
                  S
                </h1>
              </div>
            </div>
            <div className="text-center mt-10 mb-10">
              <h1 className="font-semibold text-xl">Shubham Meshram</h1>
              <h1>This could be the beginning of something good</h1>
            </div>
          </div>
        </div>
        <div className="border-t-[3px]">
          <h1 className="text-center">
            ----------------------- 8:37 PM ---------------------
          </h1>
        </div>
        <div className="flex items-center justify-end">
          <div className="flex flex-col items-end gap-2 pr-5">
            <h1>You</h1>
            <h1 className="bg-gray-400 py-3 px-5 rounded-full text-end">
              Hello Shubham
            </h1>
            <div className="text-justify">
              <h1 className="bg-gray-400 py-3 px-5 mt-5 rounded-full flex flex-wrap">
                How are you?
              </h1>
            </div>
            <h1>Seen</h1>
          </div>
        </div>
        <div className="flex items-start flex-col pl-5">
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
