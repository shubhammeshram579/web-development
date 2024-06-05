import React, { useState } from "react"
import userContexs from "../contex/useContex.js"


const UserContextProvider = ({children}) =>{

    const [user, setUser] = useState(null)

    return(
        <userContexs.Provider value={{user, setUser}}>
        {children}
        </userContexs.Provider>
    )

}

export default UserContextProvider