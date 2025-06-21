import { createContext, useState, useEffect } from "react";

const WeatherContext = createContext(null);

function WeatherProvider({ children }) {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [unit, setUnit] = useState("metric");

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const city = "London";

      try {
        const [weatherRes, forecastRes] = await Promise.all([
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`
          ),
          fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`
          ),
        ]);

        if (!weatherRes.ok || !forecastRes.ok) {
          throw new Error("API request failed");
        }

        const weather = await weatherRes.json();
        const forecast = await forecastRes.json();

        setCurrentWeather(weather);
        setForecastData(forecast);
      } catch (error) {
        console.error("Weather fetch error:", error);
      }
    };

    fetchData();
  }, [unit]);

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
