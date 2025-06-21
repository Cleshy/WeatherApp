import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function CurrentWeather() {
  const { currentWeather, unit } = useContext(WeatherContext);

  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="current-weather">
      <div className="current-weather__main">
        <h2 className="current-weather__temp">
          {Math.ceil(currentWeather?.main?.temp)}°
        </h2>
        <div className="current-weather__status">
          <img
            className="current-weather__icon"
            src={`/icons/${currentWeather?.weather[0]?.icon}.png`}
            alt=""
          />
          <p>{currentWeather?.weather[0]?.main}</p>
        </div>
        <p>Feels like: {Math.ceil(currentWeather?.main?.feels_like)}°</p>
      </div>
      <div className="current-weather__meta">
        <div>
          <h2 className="current-weather__location">{currentWeather?.name}</h2>
          <p>{time}</p>
        </div>
        <div className="current-weather__wind">
          <img
            className="current-weather__wind-icon"
            src="/icons/wind.png"
            alt=""
          />
          <p className="current-weather__wind-speed">
            {currentWeather?.wind?.speed} {unit === "metric" ? "m/s" : "m/h"}
          </p>
        </div>
        <p className="current-weather__range">
          {Math.ceil(currentWeather?.main?.temp_min)}° to{" "}
          {Math.ceil(currentWeather?.main?.temp_max)}°
        </p>
      </div>
    </div>
  );
}

export default CurrentWeather;
