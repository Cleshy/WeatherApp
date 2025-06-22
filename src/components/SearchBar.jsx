import { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";

const SearchBar = () => {
  const [userInput, setUserInput] = useState("");
  const { setUserInputCity } = useContext(WeatherContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInputCity(userInput);
    setUserInput("");
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
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
