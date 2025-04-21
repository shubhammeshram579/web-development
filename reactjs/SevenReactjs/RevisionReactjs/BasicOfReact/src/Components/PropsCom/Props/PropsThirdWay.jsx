import React from "react";

const PropsThirdWay = ({data}) => {
  
  return  (
    <div className="bg-gray-700 p-5 mt-5">
        <h1 className="text-xl">third way props array data</h1>
        {data.map((item,index) => (
            <div className="flex items-center justify-center gap-5" key={index}>
                <p>{item.name}</p>
                <p>{item.std}</p>
            </div>
        ))}
    </div>
  )
};

export default PropsThirdWay;
