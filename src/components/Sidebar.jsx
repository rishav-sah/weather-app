import { currentWeatherData } from "../utils/constant";
import dayjs from "dayjs";
import SearchBar from "./SearchBar";
import { getWeatherIconURL } from "../utils/utilities";
import { useSelector } from "react-redux";

const Sidebar = () => {

  const { unit, weatherData, cityImageUrl, status } = useSelector(
    (state) => state.weather,
  );
  const weatherIcon = getWeatherIconURL(weatherData?.weather[0].icon);

  if (status === "failed") {
    return <div>Failed to fetch weather data.</div>;
  }

  if (!weatherData) {
    return <div>No weather data available.</div>;
  }


  return (
    <div className="w-80 p-8">
      <SearchBar />
      {status === "loading" ? (
        <h1>Loading...</h1>
      ) : (
        <div className="mt-8">
          <figure className="mb-4 flex justify-center">
            <img src={weatherIcon} alt={weatherData.weather[0].main} />
          </figure>
          <div className="mb-4 border-b pb-4">
            <h1 className="mb-4 text-6xl">
              {Math.round(weatherData.main.temp)}
              {unit === "metric" ? <sup>°C</sup> : null}
              {unit === "imperial" ? <sup>°F</sup> : null}
            </h1>
            <h2>
              {dayjs.unix(currentWeatherData.dt).format("dddd")}
              {", "}
              <span className="text-neutral-400">
                {dayjs.unix(weatherData.dt).format("HH:m")}
              </span>
            </h2>
          </div>
          <div className="mb-16">
            <span className="capitalize">
              {weatherData.weather[0].description}
            </span>
          </div>
          <div>
          <figure className="relative m-auto h-28 w-52">
            <img
              className="h-full w-full rounded-xl"
              src={cityImageUrl}
              alt={weatherData.name}
            />
            <figcaption className="absolute text-2xl text-white text-center  bottom-0 left-14">{weatherData.name}</figcaption>
          </figure>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
