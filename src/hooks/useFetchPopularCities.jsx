import { useState, useEffect } from "react";
import { popularCities } from "../libs/cities";

function useFetchPopularCities() {
  const [cities, setCities] = useState(popularCities);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedCities, setFetchedCities] = useState(null);
  const [unit, setUnit] = useState("metric");

  useEffect(() => {
    const fetchCities = async () => {
      setIsLoading(true);
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

      try {
        const [city1Response, city2Response, city3Response] = await Promise.all(
          [
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${cities[0]}&units=${unit}&appid=${apiKey}`
            ),
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${cities[1]}&units=${unit}&appid=${apiKey}`
            ),
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${cities[2]}&units=${unit}&appid=${apiKey}`
            ),
          ]
        );

        if (!city1Response.ok || !city2Response.ok || !city3Response.ok) {
          throw new Error("API request failed!");
        }

        const city1 = await city1Response.json();
        const city2 = await city2Response.json();
        const city3 = await city3Response.json();

        setFetchedCities([city1, city2, city3]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCities();
  }, [unit]);

  return { fetchedCities, isLoading };
}

export default useFetchPopularCities;
