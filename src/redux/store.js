import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import favouriteReducer from "./features/favouriteSlice";
import boardReducer from "./features/boardSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    board: boardReducer,
    favourites: favouriteReducer
  }
});
