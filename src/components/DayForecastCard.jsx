import icon from "../icons/01d.png";

function DayForecastCard() {
  return (
    <div className="day-forecast-card">
      <p className="day-forecast__day">Today</p>
      <img className="day-forecast__icon" src={icon} alt="" />
      <div className="day-forecast__temp">
        <p className="day-forecast__temp-text">-1°</p>
        <div className="day-forecast__temp-bar"></div>
        <p className="day-forecast__temp-text">3°</p>
      </div>
    </div>
  );
}

export default DayForecastCard;
