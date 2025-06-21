import snowIcon from "../icons/13d.png";
import wind from "../icons/wind.png";

function CurrentWeather() {
  return (
    <div className="current-weather">
      <div className="current-weather__main">
        <h2 className="current-weather__temp">-1°</h2>
        <div className="current-weather__status">
          <img className="current-weather__icon" src={snowIcon} alt="" />
          <p>Snow</p>
        </div>
        <p>Feels like: -4 °C</p>
      </div>
      <div className="current-weather__meta">
        <div>
          <h2 className="current-weather__location">Helsinki</h2>
          <p>11:45 AM</p>
        </div>
        <div className="current-weather__wind">
          <img className="current-weather__wind-icon" src={wind} alt="" />
          <p className="current-weather__wind-speed">5.14 m/s</p>
        </div>
        <p className="current-weather__range">-1° to 3°</p>
      </div>
    </div>
  );
}

export default CurrentWeather;
