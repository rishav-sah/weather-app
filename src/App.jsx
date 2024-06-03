import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './slices/weatherSlice';
import Header from './components/Header';
import WeatherHighlights from './components/WeatherHighlights';
import WeeklyForecast from './components/WeeklyForecast';
import Sidebar from "./components/Sidebar";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather({ location: "Mumbai" }));
  }, []);

  return (
    <div className="flex flex-auto h-screen">
      <Sidebar />
      <div className="grow bg-gray-200 p-4">
        <Header />
        <WeeklyForecast />
        <WeatherHighlights />
      </div>
    </div>
  );
};

export default App;
