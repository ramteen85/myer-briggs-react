/* eslint-disable no-unused-vars */
//Authentication
import { createSlice } from '@reduxjs/toolkit';

let logoutTimer;

const initialAuthState = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
  isAuthenticated: !!localStorage.getItem('token'),
  expirationTime: +localStorage.getItem('expiresIn'),
  name: localStorage.getItem('name'),
  email: localStorage.getItem('email'),
  personality: localStorage.getItem('personality'),
};

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const deadline = new Date(expirationTime).getTime();

  return deadline - currentTime;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    logoutHandler(state, action) {
      state.token = null;
      state.isAuthenticated = false;
      state.expirationTime = null;
      localStorage.removeItem('token');
      localStorage.removeItem('expiresIn');
      localStorage.removeItem('name');
      localStorage.removeItem('email');
      localStorage.removeItem('personality');
      if (logoutTimer) clearInterval(logoutTimer);
      window.location.reload();
    },
    loginHandler(state, action) {
      state.expirationTime = action.payload.expiresIn;
      state.token = action.payload.token;
      state.isAuthenticated = !!state.token;
      localStorage.setItem('token', state.token);
      localStorage.setItem('expiresIn', state.expirationTime);
      localStorage.setItem('name', action.payload.name);
      localStorage.setItem('email', action.payload.email);
      localStorage.setItem('personality', action.payload.personality);
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.personality = action.payload.personality;
    },
    setPersonality(state, action) {
      state.personality = action.payload.personality;
      localStorage.setItem('personality', action.payload.personality);
    },
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem('token', state.token);
    },
    setExpirationDate(state, action) {
      state.expirationTime = action.payload;
      localStorage.setItem('expiresIn', state.expirationTime);
    },
  },
});

export const authActions = authSlice.actions;

// start up autologout timer
export const setAuthTimer = () => {
  return async (dispatch) => {
    try {
      // set up login and start timer
      const expirationTime = localStorage.getItem('expiresIn');
      let remainingTime = calculateRemainingTime(expirationTime);

      // update remaining time every second
      if (expirationTime) {
        logoutTimer = setInterval(async () => {
          remainingTime = remainingTime - 1000;
          let expirationTime = new Date(new Date().getTime() + remainingTime);
          await dispatch(authActions.setExpirationDate(expirationTime.toISOString()));
          if (remainingTime < 0) {
            await dispatch(authActions.logoutHandler());
            clearInterval(logoutTimer);
          }
        }, 15000);
      } else {
        await dispatch(authActions.logoutHandler());
        clearInterval(logoutTimer);
      }
    } catch (error) {
      throw error;
    }
  };
};

// export reducer
export default authSlice.reducer;
