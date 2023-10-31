import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import SearchBar from "./components/SearchBar";
import Result from "./components/Result";
import Details from "./components/Details";

function App() {
  const [searchData, setSearchData] = useState([]); // Initialize searchData as an empty array

  // Function to fetch data from the Google Books API
  const fetchDataFromAPI = (searchQuery) => {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const books = data.items.map((item) => {
          const volumeInfo = item.volumeInfo;
          return {
            title: volumeInfo.title,
            authors: volumeInfo.authors,
            publishedDate: volumeInfo.publishedDate,
            language: volumeInfo.language,
            categories: volumeInfo.categories,
            smallThumbnail: volumeInfo.imageLinks?.smallThumbnail,
            description: volumeInfo.description,
          };
        });
        setSearchData(books);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="App">
      <h1>📖 Easy Book Study 📚</h1>
      <Router>
        <Routes>
          <Route path="/" element={<SearchBar onSearch={fetchDataFromAPI} />} />
          <Route
            path="/results"
            element={
              searchData.length > 0 ? <Result searchData={searchData} /> : null
            }
          />
          <Route
            path="/details/:bookId"
            element={<Details searchData={searchData} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
