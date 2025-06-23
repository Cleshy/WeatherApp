import { useEffect, useState } from "react";

const FALLBACK_CITY = "Budapest";

function useFetchWeather() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [userInputCity, setUserInputCity] = useState("");
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
      setError(null);

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
        const [weatherRes, forecastRes] = await Promise.all([
          fetch(weatherURL),
          fetch(forecastURL),
        ]);

        if (weatherRes.status === 429 || forecastRes.status === 429) {
          throw new Error("Too many request");
        }

        if (weatherRes.status === 404 || forecastRes.status === 404) {
          throw new Error("City not found! Please try again!");
        }

        const weather = await weatherRes.json();
        const forecast = await forecastRes.json();

        setCurrentWeather(weather);
        setForecastData(forecast);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userInputCity, userLocation]);

  return {
    currentWeather,
    forecastData,
    isLoading,
    unit,
    setUnit,
    error,
    setError,
    userInputCity,
    setUserInputCity,
  };
}

export default useFetchWeather;
