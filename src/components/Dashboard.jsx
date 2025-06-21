import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import DayForecast from "./DayForecast";
import PopularCities from "./PopularCities";

function Dashboard() {
  return (
    <section className="dashboard">
      <CurrentWeather />
      <HourlyForecast />
      <DayForecast />
      <PopularCities />
    </section>
  );
}

export default Dashboard;
