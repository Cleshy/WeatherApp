import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const SearchBar = () => {
  const { setUserInputCity } = useContext(WeatherContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const city = formData.get("city");
    setUserInputCity(city);
  };

  return (
    <header>
      <div className="search-container">
        <img className="search-icon" src="/icons/Search.svg" alt="" />
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            name="city"
            type="text"
            placeholder="Search city...."
          />
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
