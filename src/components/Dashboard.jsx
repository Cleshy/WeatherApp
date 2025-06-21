import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";

function Dashboard() {
  return (
    <section className="dashboard">
      <CurrentWeather />
      <HourlyForecast />
    </section>
  );
}

export default Dashboard;
