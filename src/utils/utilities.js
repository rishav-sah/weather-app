// a utility function to get the wind direction code by passing the wind direction in degrees 
export const getWindDirection = (degrees) => {
  const directions = [
    { code: 'N', range: [348.75, 11.25] },
    { code: 'NNE', range: [11.25, 33.75] },
    { code: 'NE', range: [33.75, 56.25] },
    { code: 'ENE', range: [56.25, 78.75] },
    { code: 'E', range: [78.75, 101.25] },
    { code: 'ESE', range: [101.25, 123.75] },
    { code: 'SE', range: [123.75, 146.25] },
    { code: 'SSE', range: [146.25, 168.75] },
    { code: 'S', range: [168.75, 191.25] },
    { code: 'SSW', range: [191.25, 213.75] },
    { code: 'SW', range: [213.75, 236.25] },
    { code: 'WSW', range: [236.25, 258.75] },
    { code: 'W', range: [258.75, 281.25] },
    { code: 'WNW', range: [281.25, 303.75] },
    { code: 'NW', range: [303.75, 326.25] },
    { code: 'NNW', range: [326.25, 348.75] }
  ];

  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];
    if (degrees >= direction.range[0] && degrees < direction.range[1]) {
      return direction.code;
    }
  }

  return 'N/A'; // If the degree is out of range
}

export const getWeatherIconURL = (code) => `https://openweathermap.org/img/wn/${code}@2x.png` || "";
