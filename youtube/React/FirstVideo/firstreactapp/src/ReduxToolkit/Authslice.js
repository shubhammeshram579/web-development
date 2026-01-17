import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    card:[]
}

const authProductSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        addcard: (state,actions) => {
            state.card.push(actions.payload)
        },
        deletecard: (state,actions) => {
            state.card = state.card.filter((item) => item.id != actions.payload)
        }
    }
})

export const  {addcard,deletecard} =  authProductSlice.actions

export default authProductSlice.reducer


