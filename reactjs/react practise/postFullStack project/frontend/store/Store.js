import {configureStore} from "@reduxjs/toolkit";

import authSlice from "./AuthSlice";

const store = configureStore({
    reducer:{
        auth : authSlice,
        
    }

})

// console.log(store)

export default store


