import { convertTemp } from "../libs/convertTemp";

function HourlyForecastCard({ data, city, unit }) {
  const forecastData = {
    icon: data?.weather[0]?.icon,
    condition: data?.weather[0]?.main,
    temp: convertTemp(Math.ceil(data?.main?.temp), unit),
  };

  const dt = data.dt;
  const timezoneOffset = city.timezone;

  function getLocalTimeAMPM(dt, timezoneOffset) {
    const localMs = (dt + timezoneOffset) * 1000;
    const localDate = new Date(localMs);

    return localDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  return (
    <div className="hourly-forecast__card">
      <p className="hourly-forecast__time">
        {getLocalTimeAMPM(dt, timezoneOffset)}
      </p>
      <div className="hourly-forecast__divider"></div>
      <div className="hourly-forecast__status">
        <img
          className="hourly-forecast__icon"
          src={`/icons/${forecastData.icon}.png`}
          alt=""
        />
        <p className="hourly-forecast__condition">{forecastData.condition}</p>
      </div>
      <p className="hourly-forecast__temp">{forecastData.temp}°</p>
    </div>
  );
}

export default HourlyForecastCard;
