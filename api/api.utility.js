export const cityUrlBuilder = (city) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
};

export const forecastUrlBuilder = (formattedCityResponse) => {
  const cityLat = formattedCityResponse.coord.lat;
  const cityLon = formattedCityResponse.coord.lon;
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&exclude=hourly,minutely&units=imperial&appid=${process.env.API_KEY}&q`;
};

export const toResponseType = (forecastResponse, city) => {
  const { current, daily, lat, lon } = forecastResponse;
  return {
    currentForecast: {
      dewPoint: current.dew_point,
      cloudCover: current.clouds,
      feelsLike: current.feels_like,
      sunrise: current.sunrise,
      sunset: current.sunset,
      temp: current.temp,
      uvi: current.uvi,
      windSpeed: current.wind_speed,
      date: current.dt,
      humidity: current.humidity,
      weather: formatWeather(current.weather),
      city,
    },
    fiveDayForecast: formatForecast(daily),
    latitude: lat,
    longitude: lon,
  };
};

const formatForecast = (dailyForecast) => {
  return dailyForecast.slice(1, 6).map((forecast) => {
    return {
      dewPoint: forecast.dew_point,
      cloudCover: forecast.clouds,
      feelsLike: forecast.feels_like.day,
      sunrise: forecast.sunrise,
      sunset: forecast.sunset,
      uvi: forecast.uvi,
      weather: formatWeather(forecast.weather),
      windSpeed: forecast.wind_speed,
      date: forecast.dt,
      humidity: forecast.humidity,
      temp: {
        day: forecast.temp.day,
        min: forecast.temp.min,
        max: forecast.temp.max,
      },
    };
  });
};

const formatWeather = (weather) => {
  return weather.map((weather) => {
    return {
      description: weather.description,
      icon: weather.icon,
      iconId: weather.id,
      main: weather.main,
    };
  });
};

export const setCors = (origin) => {
  return origin === process.env.PROD
    ? process.env.PROD
    : origin === process.env.DEV
      ? process.env.DEV
      : undefined;
};
