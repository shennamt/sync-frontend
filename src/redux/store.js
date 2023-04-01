import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import projectReducer from './features/projectSlice'
import favouriteReducer from './features/favouriteSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    project: projectReducer,
    favourites: favouriteReducer
  }
})