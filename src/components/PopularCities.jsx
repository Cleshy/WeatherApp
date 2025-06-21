import CityWeatherCard from "./CityWeatherCard";

function PopularCities() {
  return (
    <section className="popular-cities">
      <h2 className="popular-cities__title">Other large cities</h2>
      <div className="popular-cities-card-container">
        <CityWeatherCard />
        <CityWeatherCard />
        <CityWeatherCard />
      </div>
    </section>
  );
}

export default PopularCities;
