const SearchBar = () => {
  return (
    <header>
      <div className="search-container">
        <img className="search-icon" src="/icons/Search.svg" alt="" />
        <input className="search" type="text" placeholder="Search city...." />
      </div>
    </header>
  );
};

export default SearchBar;
