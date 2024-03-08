import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exchangeRate: {},
  amount: 1,
  fromCurrency: "USD",
  toCurrency: "INR",
  convertedAmount: 0,
};

const currencyConverterSlice = createSlice({
  name: "CurrencyConverter",
  initialState,
  reducers: {
    setExchangerate: (state, action) => {
      state.exchangeRate = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setFromCurrency: (state, action) => {
      state.fromCurrency = action.payload;
    },
    setToCurrency: (state, action) => {
      state.toCurrency = action.payload;
    },
    setConvertedAmount: (state, action) => {
      state.convertedAmount = action.payload;
    },
  },
});

export const {
  setExchangerate,
  setAmount,
  setFromCurrency,
  setToCurrency,
  setConvertedAmount,
} = currencyConverterSlice.actions;

export default currencyConverterSlice.reducer;
