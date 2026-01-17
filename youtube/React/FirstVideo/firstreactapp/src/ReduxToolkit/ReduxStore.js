import {configureStore} from "@reduxjs/toolkit"
import authProductSlice from "./Authslice.js"



const store = configureStore({
   reducer:{
    auth:authProductSlice
   }
})

export default store