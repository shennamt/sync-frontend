import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] }

export const projectSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setProjects } = projectSlice.actions
export default projectSlice.reducer

// Redux slice with the name user and an initial state object with a single key value set to an empty array.
// Also defines a single reducer function setProjects, which sets the value key in the state to the payload of the action.