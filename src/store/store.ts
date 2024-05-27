import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from './userDataSlice';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
    counter: counterReducer,
  },
});