import React ,{useState,useEffect} from 'react'
import useContex from "./UserCreatContex.js"
import axios from 'axios';

const UsedContexProvide = ({children}) => {
    const [product, setProduct] = useState([]);

     useEffect(() => {
    const fatchData = async () => {
      const response = await axios("https://fakestoreapi.com/products");

      setProduct(response.data);
    };
    fatchData();
  }, []);


  return (
    <useContex.Provider value={{product}} >
    {children}
    </useContex.Provider>
  )
}

export default UsedContexProvide
