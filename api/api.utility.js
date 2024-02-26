export const cityUrlBuilder = (city) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
};

export const forecastUrlBuilder = (formattedCityResponse) => {
  const cityLat = formattedCityResponse.coord.lat;
  const cityLon = formattedCityResponse.coord.lon;
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&exclude=hourly,minutely&units=imperial&appid=${process.env.API_KEY}&q`;
};
