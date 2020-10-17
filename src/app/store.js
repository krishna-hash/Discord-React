import { configureStore } from '@reduxjs/toolkit';
import useReducer from '../features/counterSlice';
import appSlice from "../features/appSlice"

export default configureStore({
  reducer: {
    user: useReducer,
    app:appSlice
  },
});
