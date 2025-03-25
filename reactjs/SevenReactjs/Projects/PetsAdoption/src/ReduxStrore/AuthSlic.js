import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    isLoggedIn :false,
    isAdminLoggedIn :false,
    paymentStatus: null,
    admin:null,
    user: null,
    cards: [],
    adoptionRequest: [],
    petShelter: [],

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
        },
        adoptionReq: (state, action) => {
            state.adoptionRequest.push(action.payload);
        },
        removeadoptionReq: (state, action) => {
            state.adoptionRequest = state.adoptionRequest.filter((request) => request.id !== action.payload);
        },
        setPaymentStatus: (state, action) => {
            state.paymentStatus = action.payload;
        },
        adoptionReqAceept: (state, action) => {
            state.adoptionRequest.map((item) => {
                if(item.id === action.payload){
                    return item.status = true;
                }
        })},
        petShelterAdd: (state, action) => {
            state.petShelter.push(action.payload);
        },

    }
})

export const {Adminlogin,login,logout,addCard, removeCard,adoptionReq,removeadoptionReq,adoptionReqAceept,setPaymentStatus,petShelterAdd} = authSlice.actions;
export default authSlice.reducer;