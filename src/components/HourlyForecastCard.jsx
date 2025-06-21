function HourlyForecastCard({ data, city }) {
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
          src={`/icons/${data?.weather[0]?.icon}.png`}
          alt=""
        />
        <p className="hourly-forecast__condition">{data?.weather[0]?.main}</p>
      </div>
      <p className="hourly-forecast__temp">{Math.ceil(data?.main?.temp)}°</p>
    </div>
  );
}

export default HourlyForecastCard;
