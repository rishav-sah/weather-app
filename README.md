# Weather App
- Assignment

# Component Architecture

- App Component - `App.jsx`: Wrapper for entire application.
- Header Component - `Header.jsx`: Toggle switch for Celsius and Fahrenheit.
- Sidebar Component - `Sidebar.jsx`: Displays the current weather data along with the `SearchBar` where we can retrieve the weather information which also have geolocation functionality when clicking on location icon.
- Weekly Forecast Component - `WeeklyForecast.jsx`: Displays the weekly forecast (5 days as per limitations of the API).
- Weather Highlights Component - `WeatherHighlights.jsx`: Displays highlights considering the current weather data such as UV Index,
  Wind Status, Sunrise & Sunset, Humidity, Visibility & Air Quality. Each highlight is a sub-component where the data is being passed as props and some simple utility functions are being used to achieve the functionalities like direction in degrees to direction code, Miles to Km.

# Data Flow & State Management
  - Redux Toolkit is used for state management for this application.
  - The store is configured with a single reducer called `weatherReducer`, which is imported from `weatherSlice`.
  - `fetchWeather` which is using `createAsyncThunk` to create an asynchronous action to call the API's (`api.js`) is responsible for fetching weather data, forecast data, and a city image URL based on the provided location and unit.
  - The `setUnit` reducer is defined within the slice to update the unit value in the state.
  - we initialize the states and retrieve weatherData, forecastData, cityImageUrl, unit, and status data throughout our application.
  - Note: The present complexity of UI is small that's why we're relying on one slice, as our application scales we may define different slices to reduce complexity.

# UI Screenshot

 ![Screenshot](/src/assets/image/app-screenshot.png)

