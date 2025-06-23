import { convertTemp } from "../libs/convertTemp";
import { WeatherContext } from "../context/WeatherContext";
import { useContext } from "react";

function CityWeatherCard({ cityData }) {
  const { unit } = useContext(WeatherContext);

  const city = {
    country: cityData?.sys?.country,
    city: cityData?.name,
    condition: cityData?.weather[0]?.main,
    icon: cityData?.weather[0]?.icon,
    temp: convertTemp(cityData?.main?.temp, unit),
  };

  return (
    <div className="city-weather-card">
      <div className="city-weather-card__main">
        <p className="city-weather-card__country">{city.country}</p>
        <p className="city-weather-card__city">{city.city}</p>
        <p className="city-weather-card__condition">{city.condition}</p>
      </div>
      <div className="city-weather-card__meta">
        <img
          className="city-weather-card__icon"
          src={`/icons/${city.icon}.png`}
          alt={`${city.condition} icon`}
        />
        <p className="city-weather-card__temp">{city.temp}°</p>
      </div>
    </div>
  );
}

export default CityWeatherCard;
