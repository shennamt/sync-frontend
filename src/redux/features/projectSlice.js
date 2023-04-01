import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] }

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.value = action.payload; // modify the draft
    }
  }
})

export const { setProjects } = projectSlice.actions
export default projectSlice.reducer
