import { useEffect, useState } from "react";

const FALLBACK_CITY = "Budapest";

function useFetchWeather() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [userInputCity, setUserInputCity] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState("metric");

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.log("Error getting user location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser!");
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

      const weatherURL = userLocation
        ? `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&units=${unit}&appid=${apiKey}`
        : `https://api.openweathermap.org/data/2.5/weather?q=${
            userInputCity || FALLBACK_CITY
          }&units=${unit}&appid=${apiKey}`;

      const forecastURL = userLocation
        ? `https://api.openweathermap.org/data/2.5/forecast?lat=${userLocation.latitude}&lon=${userLocation.longitude}&units=${unit}&appid=${apiKey}`
        : `https://api.openweathermap.org/data/2.5/forecast?q=${
            userInputCity || FALLBACK_CITY
          }&units=${unit}&appid=${apiKey}`;

      try {
        const [weatherResponse, forecastResponse] = await Promise.all([
          fetch(weatherURL),
          fetch(forecastURL),
        ]);

        if (!weatherResponse.ok || !forecastResponse.ok) {
          throw new Error("API request failed");
        }

        const weather = await weatherResponse.json();
        const forecast = await forecastResponse.json();

        setCurrentWeather(weather);
        setForecastData(forecast);
      } catch (error) {
        console.error("Weather fetch error:", error);
      }
    };

    fetchData();
  }, [userInputCity, userLocation, unit]);

  return {
    currentWeather,
    forecastData,
    unit,
    setUnit,
    isLoading,
    error,
    userInputCity,
    setUserInputCity,
  };
}

export default useFetchWeather;
