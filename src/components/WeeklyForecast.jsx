import React from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const WeeklyForecast = () => {
  const { forecastData, status } = useSelector((state) => state.weather);

  if (!forecastData || !forecastData.list) {
    return <h1>No forecast data available</h1>;
  }

  const dailyForecasts = forecastData.list.filter((reading) =>
    reading.dt_txt.includes("12:00:00"),
  );

  return (
    <div className="flex items-center justify-between text-center">
      {status === "loading" ? (
        <h1>Loading...</h1>
      ) : (
        dailyForecasts.map((reading, index) => (
          <div key={index} className="rounded-xl bg-white p-4">
            <div>{dayjs(reading.dt_txt).format("ddd")}</div>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${reading.weather[0].icon}@2x.png`}
                alt={reading.weather[0].description}
              />
            </div>
            <div>
              <span>{Math.round(reading.main.temp_max)}°</span>
              <span className="ml-2 text-neutral-400">
                {Math.round(reading.main.temp_min)}°
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default WeeklyForecast;
