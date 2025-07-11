import DayForecastCard from "./DayForecastCard";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function DayForecast() {
  const { forecastData } = useContext(WeatherContext);

  if (!forecastData) return;

  function extractDailyForecast(forecastList, timezoneOffSet) {
    const dailyMap = new Map();

    forecastList.forEach((entry) => {
      const localMs = (entry.dt + timezoneOffSet) * 1000;
      const localDate = new Date(localMs);
      const dateStr = localDate.toISOString().split("T")[0];

      const prev = dailyMap.get(dateStr);
      const hourDiff = Math.abs(localDate.getHours() - 12);

      if (!prev || hourDiff < Math.abs(prev.date.getHours() - 12)) {
        dailyMap.set(dateStr, { date: localDate, data: entry });
      }
    });

    return Array.from(dailyMap.values()).slice(0, 5);
  }

  const forecastDays = extractDailyForecast(
    forecastData?.list,
    forecastData?.city?.timezone
  );

  const globalMin = Math.min(...forecastDays.map((d) => d.data.main.temp_min));
  const globalMax = Math.max(...forecastDays.map((d) => d.data.main.temp_max));

  return (
    <section className="day-forecast">
      <h2 className="day-forecast__title">5-day forecast</h2>
      <div className="day-forecast-card-container">
        {forecastDays.map((item, index) => {
          return (
            <DayForecastCard
              key={index}
              item={item}
              index={index}
              globalMin={globalMin}
              globalMax={globalMax}
            />
          );
        })}
      </div>
    </section>
  );
}

export default DayForecast;
