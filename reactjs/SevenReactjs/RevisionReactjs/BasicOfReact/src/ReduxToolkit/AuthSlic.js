import { createSlice } from "@reduxjs/toolkit";


const initialState =  {
    isLogin: false,
    cards: [],

}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        addcard: (state,action) => {
            state.cards.push(action.payload)
        },
        removeCard: (state,action) => {
            state.cards = state.cards.filter((card) => card.id !== action.payload)
        }
    }

})

export const {addcard,removeCard} = authSlice.actions;
export default authSlice.reducer