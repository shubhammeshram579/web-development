import {createSlice} from "@reduxjs/toolkit"


const initialState ={
    isLoggedIn :false,
    isAdminLoggedIn :false,
    admin:null,
    user: null,
    cards: [],
}


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        Adminlogin:(state,action) => {
            state.isAdminLoggedIn = true;
            state.admin = action.payload;
        },
        login:(state,action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAdminLoggedIn = false;
            state.isLoggedIn = false;
            state.admin = null;
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

export const {Adminlogin,login,logout,addCard, removeCard} = authSlice.actions;
export default authSlice.reducer;