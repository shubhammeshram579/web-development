import React, { useState ,useEffect } from 'react'
import createContext from "./CreateContext"
import axios from 'axios'

const CreateContexDataProvider = ({children}) => {
    const [apiData ,setApiData] = useState([])


    useEffect(() => {
        const fatchData = async () => {
            try {

                const response = await axios.get('https://dummyjson.com/products')
                // console.log(response.data.products)
                setApiData(response.data.products)
                
            } catch (error) {
                console.log(error.message || "somting Api fatching error")
                
            }

        }

        fatchData()

    },[])

    // console.log(apiData)

  return (
    <div>
        <createContext.Provider value={{apiData}}>
            {children}
        </createContext.Provider>
      
    </div>
  )
}

export default CreateContexDataProvider
