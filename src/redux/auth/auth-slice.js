import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, current } from './auth-operations';
import { showRegisterAlert } from 'pages/RegisterPage/RegisterPage';
import { showLoginAlert } from 'pages/LoginPage/LoginPage';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.data.user.name;
        state.token = payload.data.token;
        state.isLogin = true;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        showRegisterAlert();
      })
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.data.user.name;
        state.token = payload.data.token;
        state.isLogin = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.error = payload;
        showLoginAlert();
      })
      .addCase(logout.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, state => {
        state.loading = false;
        state.user = {};
        state.token = '';
        state.isLogin = false;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(current.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.data;
        state.isLogin = true;
      })
      .addCase(current.rejected, (state, { payload }) => {
        state.loading = false;
        state.token = '';
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
