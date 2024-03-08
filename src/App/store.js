import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../To do List/features/todoSlice";
import weatherReducer from "../Weather Web App/features/weatherSlice";
import currencyConverterReducer from "../Currency Converter/features/currencyConverterSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    weather: weatherReducer,
    currencyConverter: currencyConverterReducer,
  },
});

export default store;
