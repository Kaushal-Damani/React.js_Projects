import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setAmount,
  setConvertedAmount,
  setExchangerate,
  setFromCurrency,
  setToCurrency,
} from "../features/currencyConverterSlice";

export default function Converter() {
  const backgroundImageUrl =
    "https://img.freepik.com/free-vector/gradient-cryptocurrency-concept_23-2149215736.jpg?w=1480&t=st=1709890782~exp=1709891382~hmac=cdc16756093c082f1ab1303ce47e1068cfef47f806040f42ad9d139e3c7e0999";

  const dispatch = useDispatch();
  const { exchangeRate, amount, fromCurrency, toCurrency, convertedAmount } =
    useSelector((state) => state.currencyConverter);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/b601f1503379da3ecd44e722/latest/${fromCurrency}`
        );
        dispatch(setExchangerate(response.data.conversion_rates));
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };
    fetchExchangeRates();
  }, [dispatch, fromCurrency]);

  const convertCurrency = () => {
    const rate = exchangeRate[toCurrency];
    if (rate) {
      dispatch(setConvertedAmount((amount * rate).toFixed(2)));
    }
  };

  useEffect(() => {
    convertCurrency();
  }, [dispatch, exchangeRate, amount, toCurrency]);

  return (
    <>
      <div
        className="flex flexx-col items-center justify-center bg-cover bg-no-repeat min-h-screen"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="bg-[#393945] backdrop-filter backdrop-blur-lg bg-opacity-30 p-4 rounded-lg shadow-lg">
          <h1 className=" flex justify-center text-3xl font-bold text-white">
            Currency Converter
          </h1>
          <input
            className="shadow appearanc font-bold e-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-6 mb-6"
            type="text"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => dispatch(setAmount(e.target.value))}
          />
          <label className="text-white font-bold text-xl" htmlFor="">
            From :
          </label>
          <select
            className="shadow appearanc font-bold e-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1 mb-6"
            name=""
            id=""
            value={fromCurrency}
            onChange={(e) => dispatch(setFromCurrency(e.target.value))}
          >
            {Object.keys(exchangeRate).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <label className="text-white font-bold text-xl" htmlFor="">
            To :{" "}
          </label>
          <select
            className="shadow appearanc font-bold e-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1 mb-6"
            name=""
            id=""
            value={toCurrency}
            onChange={(e) => dispatch(setToCurrency(e.target.value))}
          >
            {Object.keys(exchangeRate).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>

          <h2
            className="flex justify-center mt-3 mb-3 text-white font-bold text-2xl"
            htmlFor=""
          >
            Converted Amount :
            <span className="ml-2 text-3xl">{convertedAmount}</span>
          </h2>
        </div>
      </div>
    </>
  );
}
