import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
   login:(state,action)=>{
     state.user =action.payload
   },
   logout:(state)=>{
     state.user=null
   }
  },
});

export const { login,logout } = counterSlice.actions;



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.user.user;

export default counterSlice.reducer
