import React, { useContext } from "react";
import Usedcontexdata from "..//ContexApi/usedContex.js";

const About = () => {
  const { product } = useContext(Usedcontexdata);

  console.log("contextApi data", product);

  return (
    <>
      <div className="text-center font-semibold text-2xl pb-2">About</div>
      <div className="grid grid-cols-5 gap-5">
        {product.length > 0 ? (
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
        ) : (
          <div>data not found</div>
        )}
      </div>
    </>
  );
};

export default About;
