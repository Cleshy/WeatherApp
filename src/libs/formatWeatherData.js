import { convertTemp } from "./convertTemp";

export const formatWeatherData = (currentData, unit) => {
  return {
    temp: convertTemp(currentData?.main?.temp, unit),
    statusIcon: currentData?.weather[0]?.icon,
    statusInfo: currentData?.weather[0]?.main,
    tempFeelsLike: convertTemp(currentData?.main?.feels_like, unit),
    location: currentData?.name,
    windSpeed: `${currentData?.wind?.speed} ${
      unit === "metric" ? "m/s" : "m/h"
    }`,
    minTemp: convertTemp(currentData?.main?.temp_min, unit),
    maxTemp: convertTemp(currentData?.main?.temp_max, unit),
  };
};
