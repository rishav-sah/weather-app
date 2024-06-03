import { useSelector } from "react-redux";
import UVIndexGauge from "./UvIndexGauge";
import WindStatus from "./WindStatus";
import SunriseSunset from "./SunriseSunset";
import Humidity from "./Humidity";
import Visibility from "./Visibility";
import AirQuality from "./AirQuality";

const WeatherHighlights = () => {
  const { weatherData, status } = useSelector((state) => state.weather);

  if (!weatherData) {
    return <h1>No data available</h1>;
  }

  const { wind, sys, main, visibility } = weatherData;

  return (
    <div className="mt-10">
      <h1 className="mb-4 text-2xl">Today's Highlights</h1>
      {status === "loading" ? (
        <h1>Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4 place-items-center">
          <UVIndexGauge uvIndex={4} />
          <WindStatus wind={wind} />
          <SunriseSunset sys={sys} />
          <Humidity humidity={main.humidity} />
          <Visibility visibility={visibility} />
          <AirQuality />
        </div>
      )}
    </div>
  );
};

export default WeatherHighlights;
