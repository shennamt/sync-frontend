import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import projectReducer from './features/projectSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    project: projectReducer
  }
})
