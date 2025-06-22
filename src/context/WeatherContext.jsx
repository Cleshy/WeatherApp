import { createContext } from "react";
import useFetchWeather from "../hooks/useFetchWeather";

const WeatherContext = createContext(null);

function WeatherProvider({ children }) {
  const { currentWeather, forecastData, unit, setUnit } = useFetchWeather();

  return (
    <WeatherContext.Provider
      value={{ currentWeather, forecastData, unit, setUnit }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherProvider;
export { WeatherContext };
