import { useState } from "react";
import useFetchWeather from "./useFetchWeather";

const FALLBACK_CITY = "Budapest";

function useWeather() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const { data, isLoading, error } = useFetchWeather();

  console.log(data);

  return <div></div>;
}

export default useWeather;
