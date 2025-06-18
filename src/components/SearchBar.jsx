import SearchIcon from "../icons/search.svg";

const SearchBar = () => {
  return (
    <header>
      <div className="search-container">
        <img className="search-icon" src={SearchIcon} alt="" />
        <input className="search" type="text" placeholder="Search city...." />
      </div>
    </header>
  );
};

export default SearchBar;
