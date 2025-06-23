import { useState, useEffect } from "react";
import useFetchWeather from "./useFetchWeather";

const popularCities = ["New York", "Copenhagen", "Ho Chi Minh City"];

function useFetchPopularCities() {
  const { setError } = useFetchWeather();
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedCities, setFetchedCities] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      setIsLoading(true);
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

      try {
        const responses = await Promise.all(
          popularCities.map((city) =>
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
            )
          )
        );

        const data = await Promise.all(
          responses.map((res) => {
            if (res.status === 429) {
              throw new Error("Too many request! Please try again later!");
            } else if (res.status === 404) {
              throw new Error("City not found!");
            }

            return res.json();
          })
        );

        setFetchedCities(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

  return { fetchedCities, isLoading };
}

export default useFetchPopularCities;
