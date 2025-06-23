import CityWeatherCard from "./CityWeatherCard";
import useFetchPopularCities from "../hooks/useFetchPopularCities";

function PopularCities() {
  const { fetchedCities, isLoading } = useFetchPopularCities();

  return (
    <section className="popular-cities">
      <h2 className="popular-cities__title">Other large cities</h2>
      <div className="popular-cities-card-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          fetchedCities?.map((city, index) => {
            return <CityWeatherCard key={index} cityData={city} />;
          })
        )}
      </div>
    </section>
  );
}

export default PopularCities;
