import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null

}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
    },
    logout: (state) => {
        state.isLoggedIn = false;
        state.user = null;

    },
  //   posts: (state,action) => {
  //     state.isLoggedIn = true;
  //     state.posts = action.payload.posts;

  // }
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;