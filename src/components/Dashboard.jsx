import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import DayForecast from "./DayForecast";
import PopularCities from "./PopularCities";

function Dashboard() {
  return (
    <main className="dashboard">
      <CurrentWeather />
      <HourlyForecast />
      <DayForecast />
      <PopularCities />
    </main>
  );
}

export default Dashboard;
