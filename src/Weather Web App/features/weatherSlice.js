import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "",
  weatherInfo: "",
  error: "",
};

const weatherSlice = createSlice({
  name: "Weather-Data",
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setWeatherInfo: (state, action) => {
      state.weatherInfo = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setCity, setWeatherInfo, setError } = weatherSlice.actions;

export default weatherSlice.reducer;
