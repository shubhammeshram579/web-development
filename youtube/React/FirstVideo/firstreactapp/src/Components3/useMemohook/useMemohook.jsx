import React, { useState, useCallback,useMemo } from "react";
import UseMemohookchild from "./useMemohookchild";
import axios from "axios";

const UseMemohook = () => {
  const [count, setCount] = useState(0);


  const handelIncrse = useCallback(() => {
    // setCount(count+1)
    setCount((prev) => prev + 1);
  }, [setCount]);


//   const Result  = () => {
//     let a = 10;
//     let b = 20;
//     let total = a + b;

//     console.time()
//     console.log(total)

//     console.timeEnd()

//   }




const Result = async () => {
    const res = await axios.get("https://fakestoreapi.com/products")

    console.time()
    
    console.log(res.data)

    console.timeEnd()
}

  const storeResult = useMemo(() => {

    Result()

  },[])

  return (
    <div>
        <h1>{storeResult}</h1>
      <p>count:{count}</p>
      <UseMemohookchild handelIncrse={handelIncrse} />
    </div>
  );
};

export default UseMemohook;
