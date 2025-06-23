import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { getCurrentTime } from "../libs/getCurrentTime";
import { formatWeatherData } from "../libs/formatWeatherData";

function CurrentWeather() {
  const { currentWeather, unit } = useContext(WeatherContext);

  const weatherData = formatWeatherData(currentWeather, unit);

  return (
    <div className="current-weather">
      <div className="current-weather__main">
        <h2 className="current-weather__temp">{weatherData.temp}°</h2>
        <div className="current-weather__status">
          <img
            className="current-weather__icon"
            src={`/icons/${weatherData.statusIcon}.png`}
            alt=""
          />
          <p>{weatherData.statusInfo}</p>
        </div>
        <p>Feels like: {weatherData.tempFeelsLike}°</p>
      </div>
      <div className="current-weather__meta">
        <div>
          <h2 className="current-weather__location">{weatherData.location}</h2>
          <p>{getCurrentTime()}</p>
        </div>
        <div className="current-weather__wind">
          <img
            className="current-weather__wind-icon"
            src="/icons/wind.png"
            alt=""
          />
          <p className="current-weather__wind-speed">{weatherData.windSpeed}</p>
        </div>
        <p className="current-weather__range">
          {weatherData.minTemp}° to {weatherData.maxTemp}°
        </p>
      </div>
    </div>
  );
}

export default CurrentWeather;
