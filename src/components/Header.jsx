import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, setUnit } from "../slices/weatherSlice";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  const dispatch = useDispatch();
  const { unit, weatherData } = useSelector((state) => state.weather);
  const city = weatherData?.name;

  const handleUnitChange = (newUnit) => {
    console.log(unit);
    console.log(newUnit);
    if (newUnit !== unit && city) {
      dispatch(setUnit(newUnit));
      dispatch(fetchWeather({ location: city, unit: newUnit }));
    }
  };

  return (
    <header className="flex items-center justify-between pb-4">
      <div className="text-xl">
        <span className="text-neutral-400">Today</span>
        <span className="ml-4 underline">Week</span>
      </div>
      <div>
        <div>
          <button
            className={`mx-2 rounded-full px-2 py-1 ${unit === "metric" ? "bg-black text-white" : "bg-white text-black"}`}
            onClick={() => handleUnitChange("metric")}
          >
            °C
          </button>
          <button
            className={`mx-2 rounded-full px-2 py-1 ${unit === "imperial" ? "bg-black text-white" : "bg-white text-black"}`}
            onClick={() => handleUnitChange("imperial")}
          >
            °F
          </button>
          <PersonIcon fontSize="large" color="primary" />
        </div>
      </div>
    </header>
  );
};

export default Header;
