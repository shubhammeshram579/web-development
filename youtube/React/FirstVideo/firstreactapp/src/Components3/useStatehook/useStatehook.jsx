import React, { useState } from "react";
import Userdata from "./userdata";

const UseStatehook = () => {

    
  const obj = {
    name: "shubham",
    age: "26",
    address: "pune",
  };
  const [data, setData] = useState(null);

  const handelbtn = () => {
    setData(obj);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div >
        <Userdata user={data} />

        <button onClick={handelbtn} className="bg-yellow-300 px-4 py-2 rounded">
          send data user
        </button>
      </div>
    </div>
  );
};

export default UseStatehook;
