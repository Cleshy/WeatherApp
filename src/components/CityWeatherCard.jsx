function CityWeatherCard({ city }) {
  return (
    <div className="city-weather-card">
      <div className="city-weather-card__main">
        <p className="city-weather-card__country">{city?.sys?.country}</p>
        <p className="city-weather-card__city">{city?.name}</p>
        <p className="city-weather-card__condition">{city?.weather[0]?.main}</p>
      </div>
      <div className="city-weather-card__meta">
        <img
          className="city-weather-card__icon"
          src={`/icons/${city?.weather[0]?.icon}.png`}
          alt=""
        />
        <p className="city-weather-card__temp">
          {Math.ceil(city?.main?.temp)}°
        </p>
      </div>
    </div>
  );
}

export default CityWeatherCard;
