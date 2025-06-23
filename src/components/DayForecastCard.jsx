import { useContext } from "react";
import { convertTemp } from "../libs/convertTemp";
import { WeatherContext } from "../context/WeatherContext";

function DayForecastCard({ item, index, globalMin, globalMax }) {
  const { unit } = useContext(WeatherContext);

  function getDayName(date, index) {
    if (index === 0) return "Today";
    return date.toLocaleDateString("en-US", { weekday: "short" });
  }

  const dailyData = {
    label: getDayName(item.date, index),
    iconURL: `/icons/${item?.data?.weather[0].icon}.png`,
    condition: item?.data?.weather[0]?.main,
    minTemp: convertTemp(item?.data?.main?.temp_min, unit),
    maxTemp: convertTemp(item?.data?.main?.temp_max, unit),
  };

  const globalMinConverted = convertTemp(globalMin, unit);
  const globalMaxConverted = convertTemp(globalMax, unit);
  const range = globalMaxConverted - globalMinConverted;

  const left = ((dailyData.minTemp - globalMinConverted) / range) * 100;
  const width = ((dailyData.maxTemp - dailyData.minTemp) / range) * 100;

  return (
    <div className="day-forecast-card">
      <p className="day-forecast__day">{dailyData.label}</p>
      <div className="day-forecast__visuals">
        <img
          className="day-forecast__icon"
          src={dailyData.iconURL}
          alt={`${dailyData.condition} Icon`}
        />
        <p className="day-forecast__text">{dailyData.condition}</p>
      </div>
      <div className="day-forecast__temp-condition">
        <p className="day-forecast__temp-text">{dailyData.minTemp}°</p>
        <div className="day-forecast__temp-bar">
          <div
            className="day-forecast__temp-bar-inner"
            style={{
              left: `${left}%`,
              width: `${width}%`,
            }}
          ></div>
        </div>
        <p className="day-forecast__temp-text">{dailyData.maxTemp}°</p>
      </div>
    </div>
  );
}

export default DayForecastCard;
