import {configureStore} from "@reduxjs/toolkit"

import authReducer from "./AuthSlic.js"

const store = configureStore({
    reducer:{
        auth :authReducer,
    }
})

export default store;