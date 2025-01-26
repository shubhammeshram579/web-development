import React,{useState,useEffect} from 'react'
import axios from "axios"

const PropsSixApi = () => {
    const [data,setData] = useState([]);


    useEffect(() => {
        const fatchApiData = async () => {
           try {
             const response = await axios.get("https://dummyjson.com/products/1");
             // console.log(response.data);
             setData(response.data)
           } catch (error) {
            console.log(error.message || "somting api fatch error")
            
           }
        }
        fatchApiData()

    },[])


  return (
    <div>
      {data.brand}
      {data.category}
    </div>
  )
}

export default PropsSixApi
