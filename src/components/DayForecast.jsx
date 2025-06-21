import DayForecastCard from "./DayForecastCard";

function DayForecast() {
  return (
    <section className="day-forecast">
      <h2 className="day-forecast__title">5-day forecast</h2>
      <div className="day-forecast-card-container">
        <DayForecastCard />
        <DayForecastCard />
        <DayForecastCard />
        <DayForecastCard />
        <DayForecastCard />
      </div>
    </section>
  );
}

export default DayForecast;
