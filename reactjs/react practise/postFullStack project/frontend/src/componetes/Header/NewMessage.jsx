import React from "react";

const NewMessage = () => {
  return (
    <div className="w-[22vw] h-[85vh] bg-gray-200 rounded-xl">
      <div className="flex items-center justify-between p-4 font-semibold text-2xl">
        <h1>New Messages</h1>
        <h1 className="text-xl">cancel</h1>
      </div>
      <div className="flex items-start justify-between gap-[45vh] flex-col px-5">
        <div className="mt-10">
          <div>
            <form>
              <p className="flex items-center justify-center">
                <i class="fa-solid fa-magnifying-glass bg-green-300 h-12 pt-4 pl-3 rounded-s-lg"></i>
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="w-[18vw] h-12 rounded-e-lg bg-green-300"
                />
              </p>
            </form>
          </div>
          <div className="flex items-center justify-start gap-5 mt-10 hover:bg-green-300 py-5 px-2 rounded w-[20vw]">
            <h1 className="bg-blue-600 py-2 px-5 rounded-full">s</h1>
            <div className="flex items-start flex-col">
              <h1 className="font-semibold text-xl">shubham meshram</h1>
              <div className="flex items-start gap-20">
                <h1>shubham97</h1>
                <i class="fa-solid fa-xmark opacity-0 hover:opacity-100"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <i class="ri-tools-fill text-2xl"></i>
          <form action="">
            <input type="text" placeholder=" Send message"  className="w-[15vw] h-16 rounded-full bg-green-300"/>
          </form>
          <div className="flex items-center">
          <i class="fa-solid fa-heart text-xl"></i>
          <i class="ri-send-plane-2-fill text-xl bg-red-600 p-4 rounded-full ml-[-35px]"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMessage;
