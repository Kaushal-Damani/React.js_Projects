import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./To do List/features/todoSlice";
import weatherSlice from "./Weather Web App/features/weatherSlice";

const store = configureStore({
  reducer: { todos: todoReducer, weather: weatherSlice },
});

export default store;
