import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoggedIn :false,
    user: null,
    cards: []
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action) => {
            state.isLoggedIn = true
            state.user = action.payload
        },
        addCard: (state,action) => {
            state.cards.push(action.payload)
        },
        deleteCard:(state,action) => {
            state.cards = state.cards.filter((item) => item.id !== action.payload)
        },
        updatedCard:(state,action) => {
            const { id, title, price } = action.payload;
            // console.log("title",title)
            // const exiting = state.cards.find((item) => item.id === id)

            // if(exiting){
            //     exiting.title = title
            //     exiting.price = price
            // }

            state.cards.find((item) => {
                if(item.id === id){
                    item.title = title
                    item.price = price
                }
            })


            
        }
    }

})


export const {addCard,login,deleteCard,updatedCard} = authSlice.actions;
export default authSlice.reducer