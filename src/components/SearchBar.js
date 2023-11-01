import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/MainStyle.css";

function SearchBar({ onSearch }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState("");

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchError("Please enter a valid search query");
      return;
    }

    setSearchError("");

    onSearch(searchQuery);

    navigate("/results"); // Navigate to the "/results" route
  };

  return (
    <div className="s130">
      <form>
        <div className="inner-form">
          <div className="input-field first-wrap">
            <div className="svg-wrapper">
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
          <div className="input-field second-wrap">
            <button className="btn-search" type="button" onClick={handleSearch}>
              SEARCH
            </button>
          </div>
        </div>

        <span className="info">
          Keyword like. Computer, React, Sport, Finnish language ...
        </span>
        <br></br>
        <span className="info">{searchError}</span>
      </form>
    </div>
  );
}

export default SearchBar;
