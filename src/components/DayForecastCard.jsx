function DayForecastCard({ item, index }) {
  function getDayName(date, index) {
    if (index === 0) return "Today";
    return date.toLocaleDateString("en-US", { weekday: "short" });
  }
  const dayLabel = getDayName(item.date, index);
  const icon = item.data.weather[0].icon;
  const iconUrl = `/icons/${icon}.png`;
  const minTemp = item?.data?.main?.temp_min;
  const maxTemp = item?.data?.main?.temp_max;

  return (
    <div className="day-forecast-card">
      <p className="day-forecast__day">{dayLabel}</p>
      <img className="day-forecast__icon" src={iconUrl} alt="" />
      <div className="day-forecast__temp">
        <p className="day-forecast__temp-text">{minTemp}°</p>
        <div className="day-forecast__temp-bar"></div>
        <p className="day-forecast__temp-text">{maxTemp}°</p>
      </div>
    </div>
  );
}

export default DayForecastCard;
