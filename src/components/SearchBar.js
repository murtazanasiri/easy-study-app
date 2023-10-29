import React, { useState } from "react";

import "../css/MainStyle.css";

function SearchBar({ onSearch }) {
  // State to store the user's query
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState("");

  // Function to handle the search query input
  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle the search button click
  const handleSearch = () => {
    // Check if the search query is emapy or contains only whitespace
    if (!searchQuery.trim()) {
      setSearchError("Please enter a valid seaerch query");
      return; // Prevent further execution
    }

    // Clear any previous search error.
    setSearchError("");

    // call the onSearch function with the searchQuery
    onSearch(searchQuery);
  };

  return (
    <div class="s130">
      <form>
        <div class="inner-form">
          <div class="input-field first-wrap">
            <div class="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </div>
            <input
              id="search"
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={handleSearchInput}
            />
          </div>
          <div class="input-field second-wrap">
            <button class="btn-search" type="button" onClick={handleSearch}>
              SEARCH
            </button>
          </div>
        </div>

        <span class="info">
          Keyword like. Computer, React, Sport, Finish language ...
        </span>
        <br></br>
        <span className="info">{searchError}</span>
      </form>
    </div>
  );
}

export default SearchBar;
