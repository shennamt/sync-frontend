import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] }

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      if (action.payload) {
        state.value = action.payload;
      } else {
        state.value = {}
      }
    }
  }
})

export const { setProjects } = projectSlice.actions
export default projectSlice.reducer
