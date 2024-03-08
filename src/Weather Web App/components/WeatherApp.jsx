import { Search } from "lucide-react";
import React from "react";
import humidity from "../Assets/humidity.png";
import wind from "../Assets/wind.png";
import { useDispatch, useSelector } from "react-redux";
import { setCity, setError, setWeatherInfo } from "../features/weatherSlice";

export default function weatherApp() {
  const city = useSelector((state) => state?.weather?.city);
  const weather = useSelector((state) => state?.weather?.weatherInfo);
  const error = useSelector((state) => state?.weather?.error);
  const API_KEY = "b75e7bab8afc50f7a26720d4462b4353";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      let response = await fetch(url);
      let output = await response.json();
      if (response.ok) {
        dispatch(setWeatherInfo(output));
        dispatch(setError(""));
      } else {
        dispatch(setError("No Data found, Please enter a valid city name."));
      }
    } catch (error) {
      console.log("Error => ", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#4B515D] min-h-screen">
      <div className="shadow-2xl box-content font-bold text-xl text-white p-4 border-2 rounded-lg bg-gradient-to-b from-[#4066a4] to-[#ccaba6]">
        <div className="flex">
          <input
            className="shadow-2xl border-2 rounded-full text-black font-bold text-xl px-4 py-2 border-2 border-gray-300 focus:outline-none mt-[30px] mb-[30px]"
            type="text"
            placeholder="Search"
            value={city}
            onChange={(e) => dispatch(setCity(e.target.value))}
          />
          <button onClick={() => fetchData()}>
            <Search
              size={28}
              color="#ffffff"
              strokeWidth={3}
              className="ml-3 mt-[40px] mb-[40px]"
            />
          </button>
        </div>

        {error && (
          <p className="flex justify-center mt-9 text-base text-black">
            {error}
          </p>
        )}

        {weather && weather.weather && (
          <div>
            <div className="flex justify-center">
              <img
                className=""
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt=""
              />
            </div>
            <h1 className="flex justify-center font-semibold text-4xl mb-6">
              {weather.weather[0].description}
            </h1>
            <h1 className="flex justify-center font-semibold text-8xl ">
              {weather.main.temp}
            </h1>
            <h1 className="flex justify-center mt-9 text-4xl my-6 mb-9">
              {weather.name}
            </h1>
            <div className="flex justify-between mt-4 mx-4">
              <div className="flex items-center">
                <img src={humidity} alt="Humidity Logo" className="h-6 mr-2" />
                <div>
                  <label className="" htmlFor="">
                    Humidity
                  </label>
                  <p className=" font-bold ">{weather.main.humidity}%</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src={wind} alt="Wind Logo" className="h-6 mr-2" />
                <div>
                  <label className="" htmlFor="">
                    Wind Speed
                  </label>
                  <p className=" font-bold ">{weather.wind.speed} km/h</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
