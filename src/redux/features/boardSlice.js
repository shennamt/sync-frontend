import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: [] };

export const boardSlice = createSlice({
  name: "user",
  initialState,
  reducers: { 
    setBoards: (state, action) => { // reducer functions that handle actions that update the state
      state.value = action.payload; // replace existing value array with payload array
    }
  }
});
export const { setBoards } = boardSlice.actions; // contains action creators for setBoards
export default boardSlice.reducer;
