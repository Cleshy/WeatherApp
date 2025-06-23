import { useEffect, useState } from "react";

const FALLBACK_CITY = "Budapest";

function useFetchWeather() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [userInputCity, setUserInputCity] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

      const isUserTyped = Boolean(userInputCity?.trim());

      const weatherURL = isUserTyped
        ? `https://api.openweathermap.org/data/2.5/weather?q=${userInputCity}&units=metric&appid=${apiKey}`
        : userLocation
        ? `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&units=metric&appid=${apiKey}`
        : `https://api.openweathermap.org/data/2.5/weather?q=${FALLBACK_CITY}&units=metric&appid=${apiKey}`;

      const forecastURL = isUserTyped
        ? `https://api.openweathermap.org/data/2.5/forecast?q=${userInputCity}&units=metric&appid=${apiKey}`
        : userLocation
        ? `https://api.openweathermap.org/data/2.5/forecast?lat=${userLocation.latitude}&lon=${userLocation.longitude}&units=metric&appid=${apiKey}`
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
        setIsLoading(false);
      } catch (error) {
        console.error("Weather fetch error:", error);
      }
    };

    fetchData();
  }, [userInputCity, userLocation]);

  return {
    currentWeather,
    forecastData,
    isLoading,
    error,
    unit,
    setUnit,
    userInputCity,
    setUserInputCity,
  };
}

export default useFetchWeather;
