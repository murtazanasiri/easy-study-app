import React, { useState } from "react";

import "../css/MainStyle.css";

function SearchBar() {
  // State to store the user's query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle the search query input
  const handleSearchInput = (e) => {
    setSearchQuery(e.targer.value);
  };

  // Function to handle the search button click
  const handleSearch = () => {
    // Here you can call the function to fetch data from the API based on the 'searchQuery'
    // example: fetchDataFromAPI(searchQuery)
  };

  return (
    <div className="container">
      <div className="search-bar-container">
        {/* Search bar input and submit button */}
        <input
          className="search-input"
          type="text"
          placeholder="Enter keywords..."
          value={searchQuery}
          onChange={handleSearchInput}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
