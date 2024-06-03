import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCityImage, fetchForecastData, fetchWeatherData } from "../api/api";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ location, unit }) => {
    let weatherData, forecastData, cityFetchUrl;
    if (typeof location === 'string') {
      weatherData = await fetchWeatherData(location, unit);
      forecastData = await fetchForecastData(location, unit);
      cityFetchUrl = await fetchCityImage(location);
    } else {
      const { lat, lon } = location;
      weatherData = await fetchWeatherData({ lat, lon }, unit);
      forecastData = await fetchForecastData({ lat, lon }, unit);
      cityFetchUrl = await fetchCityImage(weatherData.name);
    }
    return { weatherData, forecastData, cityFetchUrl };
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: null,
    forecastData:  null,
    cityImageUrl: null,
    unit: "metric",
    status: "idle",
  },
  reducers: {
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.weatherData = action.payload.weatherData;
        state.forecastData = action.payload.forecastData;
        state.cityImageUrl = action.payload.cityFetchUrl;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setUnit } = weatherSlice.actions;

export default weatherSlice.reducer;
