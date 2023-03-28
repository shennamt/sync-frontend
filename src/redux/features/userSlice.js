import { createSlice } from "@reduxjs/toolkit";

// The initialState object defines the initial state of the slice, which in this case is an object with a single property value that is an empty object {}.
const initialState = { value: {} }

// The userSlice.actions object contains the generated action creators, including the setUser action creator that can be used to dispatch actions to update the state of the user slice.
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => state.value = action.payload
  }
})

// exports the setUser action creator and the userSlice.reducer function, which can be used to create a Redux store that manages the state of the user slice.
export const { setUser } = userSlice.actions

export default userSlice.reducer