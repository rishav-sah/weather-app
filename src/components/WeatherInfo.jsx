import React from "react";
import { useSelector } from "react-redux";
import { cityImageUrl, currentWeatherData } from "../utils/constant";

const WeatherInfo = () => {
  // const weather = useSelector((state) => state.weather.data);
  // const cityImageUrl = useSelector((state) => state.weather.cityImageUrl);
  console.log(cityImageUrl);

  if (!currentWeatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-info">
      <img src={cityImageUrl} alt={currentWeatherData.name} />
      <h1>{currentWeatherData.name}</h1>
      <p>{currentWeatherData.main.temp}°C</p>
    </div>
  );
};

export default WeatherInfo;
