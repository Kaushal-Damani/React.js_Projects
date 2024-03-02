import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./To do List/features/todoSlice";

const store = configureStore({
  reducer: todoReducer,
});

export default store;
