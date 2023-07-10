import { createSlice } from '@reduxjs/toolkit';
import { logOut, register, logIn } from './operators';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        console.log(action.payload);
        console.log(state.isLoggedIn);
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
  },
});

export default userSlice.reducer;
