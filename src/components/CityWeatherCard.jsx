import icon from "../icons/09d.png";

function CityWeatherCard() {
  return (
    <div className="city-weather-card">
      <div className="city-weather-card__main">
        <p className="city-weather-card__country">US</p>
        <p className="city-weather-card__city">New York</p>
        <p className="city-weather-card__condition">Clear sky</p>
      </div>
      <div className="city-weather-card__meta">
        <img className="city-weather-card__icon" src={icon} alt="" />
        <p className="city-weather-card__temp">14°</p>
      </div>
    </div>
  );
}

export default CityWeatherCard;
