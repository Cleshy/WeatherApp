import { useContext } from "react";
import HourlyForecastCard from "./HourlyForecastCard";
import { WeatherContext } from "../context/WeatherContext";

function HourlyForecast() {
  const { forecastData, unit } = useContext(WeatherContext);

  const hourlyForeCasts = forecastData?.list?.slice(0, 8).map((data, index) => {
    return (
      <HourlyForecastCard
        key={index}
        data={data}
        city={forecastData.city}
        unit={unit}
      />
    );
  });

  return <section className="hourly-forecast">{hourlyForeCasts}</section>;
}

export default HourlyForecast;
