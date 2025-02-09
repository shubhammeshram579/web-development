import {createSlice} from "@reduxjs/toolkit"


const initialState ={
    isLoggedIn :false,
    user: null,
    cards: [],
}


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        addCard: (state, action) => {
            state.cards.push(action.payload);
        },
        removeCard: (state, action) => {
            state.cards = state.cards.filter((card) => card.id !== action.payload);
        }
    }
})

export const {login,logout,addCard, removeCard} = authSlice.actions;
export default authSlice.reducer;