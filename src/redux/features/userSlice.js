// The createSlice function is imported from the @reduxjs/toolkit package,
// which is a collection of utilities for simplifying Redux development.
// It takes an object that describes the initial state of the slice, as well
// as a set of "reducers" that define how the state can be updated.
import { createSlice } from "@reduxjs/toolkit";
// initial state of the `user` slice is an object with a value of empty object
const initialState = { value: {} };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // function to take the current state and an `action` object as input
    // sets the `value` property of the state to the `payload` property of the action
    setUser: (state, action) => {
      state.value = action.payload;
    }
  }
});
// exports `setUser` action creator function to create an action with the
// `payload` property to be passed to the reducer
export const { setUser } = userSlice.actions;
// exports the reducer function to be used in a Redux store to manage the state
// of the `user` slice
export default userSlice.reducer;
