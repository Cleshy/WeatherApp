import image from "../icons/01d.png";

function HourlyForecastCard() {
  return (
    <div className="hourly-forecast__card">
      <p className="hourly-forecast__time">9:00 AM</p>
      <div className="hourly-forecast__divider"></div>
      <div className="hourly-forecast__status">
        <img className="hourly-forecast__icon" src={image} alt="" />
        <p className="hourly-forecast__condition">Snow</p>
      </div>
      <p className="hourly-forecast__temp">3°</p>
    </div>
  );
}

export default HourlyForecastCard;
