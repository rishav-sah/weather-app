import axios from 'axios';

const { VITE_OPEN_WEATHER_MAP_API_KEY, VITE_UNSPLASH_ACCESS_KEY } = import.meta.env;
const OPEN_WEATHER_MAP_API_KEY = VITE_OPEN_WEATHER_MAP_API_KEY;

const UNSPLASH_ACCESS_KEY = VITE_UNSPLASH_ACCESS_KEY;

const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
});

// Function to fetch weather data
export const fetchWeatherData = async (location, unit = "metric") => {
  try {
    let params;
    if (typeof location === 'string') {
      params = {
        q: location,
        appid: OPEN_WEATHER_MAP_API_KEY,
        units: unit,
      };
    } else {
      const { lat, lon } = location;
      params = {
        lat,
        lon,
        appid: OPEN_WEATHER_MAP_API_KEY,
        units: unit, // Default to metric
      };
    }
    const response = await weatherApi.get(`/weather`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

// Function to fetch forecast data
export const fetchForecastData = async (location, unit = "metric") => {
  try {
    let url, params;
    if (typeof location === 'string') {
      params = {
        q: location,
        appid: OPEN_WEATHER_MAP_API_KEY,
        units: unit,
      };
    } else {
      const { lat, lon } = location;
      params = {
        lat,
        lon,
        appid: OPEN_WEATHER_MAP_API_KEY,
        units: unit, // Default to metric
      };
    }
    const response = await weatherApi.get(`/forecast`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    throw error;
  }
};

// Function to fetch city image
export const fetchCityImage = async (city) => {
  try {
    const response = await unsplashApi.get('/search/photos', {
      params: {
        query: city,
        client_id: UNSPLASH_ACCESS_KEY,
        per_page: 1,
      },
    });
    if (response.data.results.length > 0) {
      return response.data.results[0].urls.regular;
    } else {
      return "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
    }
  } catch (error) {
    console.error('Error fetching city image:', error);
    throw error;
  }
};

// Function to get user's current location (optional)
export const fetchUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position.coords);
        },
        (error) => {
          reject(error);
        }
      );
    }
  });
};
