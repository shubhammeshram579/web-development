import React, { useContext, useEffect, useState } from "react";
import Usedcontexdata from "..//ContexApi/usedContex.js";
import Usedebouncesearch from "..//../Components3/hooks/customhook.js"

const About = () => {
  const { product } = useContext(Usedcontexdata);

  const [searchbyid,setSearchbyid] = useState("")
  const debounceseach = Usedebouncesearch(searchbyid,2000)

  const [data,setData] = useState([])

  console.log("contextApi data", product);


  useEffect(() => {
    const filterdata = product.filter((item) => {

    const searchbyid = item.id === parseInt(debounceseach);

    return searchbyid
  })
     
    setData(filterdata)



  },[debounceseach])




  console.log("filterdata",data)


  return (
    <>
    <div className="bg-gray-800">
      <div className="text-center pt-2 pb-2">
        <input type="text" value={searchbyid} onChange={(e) => setSearchbyid(e.target.value)} className="w-[30vw] mb-20 rounded py-2"  placeholder="search product by id" />

      </div>

      
      <div className="grid grid-cols-5 gap-5">
        {
        data.length > 0 ? (
          data.map((p, i) => (
            <div
              key={p.id}
              className="bg-white flex items-center justify-center flex-col rounded-xl py-2 px-5"
            >
              <img src={p.image} alt="" className="h-32 w-42" />
              <p>name: {p.category}</p>
              <p>price: {p.price}</p>
            </div>
          ))
        ) : (
          
          product.map((p, i) => (
            <div
              key={p.id}
              className="bg-white flex items-center justify-center flex-col rounded-xl py-2 px-5"
            >
              <img src={p.image} alt="" className="h-32 w-42" />
              <p>name: {p.category}</p>
              <p>price: {p.price}</p>
            </div>
          ))
        )}
      </div>
      </div>
    </>
  );
};

export default About;
