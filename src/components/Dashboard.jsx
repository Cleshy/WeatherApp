import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import DayForecast from "./DayForecast";

function Dashboard() {
  return (
    <section className="dashboard">
      <CurrentWeather />
      <HourlyForecast />
      <DayForecast />
    </section>
  );
}

export default Dashboard;
