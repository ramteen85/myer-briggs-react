import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth'; // authentication

// merge all reducers
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
