import React,{useState,useEffect} from 'react'
import Usedcontexdata from "./usedContex.js"
import axios from "axios"

const UsedContexProvider = ({children}) => {

    const [product,setProduct] = useState([])

  useEffect(() => {

  const fatchData = async () => {
    try {
      
      const res = await axios.get(`https://fakestoreapi.com/products`)

      console.log("data",res.data)
      setProduct(res.data)
    } catch (error) {
      console.log("api error",error)
      
    }
  }

  fatchData()
  },[])

  return (
    <Usedcontexdata.Provider value={{product}}>
      {children}
    </Usedcontexdata.Provider>
  )
}

export default UsedContexProvider
