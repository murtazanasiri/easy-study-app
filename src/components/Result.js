import React from "react";
import { Link } from "react-router-dom";
import "../css/ResultStyle.css";
import Header from "./Header";

function Result({ searchData }) {
  const truncateDescription = (description, wordLimit) => {
    if (description && typeof description === "string") {
      const words = description.split(" ");
      if (words.length > wordLimit) {
        return words.splice(0, wordLimit).join(" ") + "...";
      }
      return description;
    }

    return "";
  };

  if (searchData === null) {
    return null;
  } else if (searchData.length === 0) {
    return (
      <center>
        <span className="info">
          No results found for the given search query.
        </span>
      </center>
    );
  }

  return (
    <div class="container">
      <Header></Header>
      {/* Add the Header component */}
      <center>
        {searchData.map((book, index) => (
          <div class="well" key={index}>
            <div class="media">
              <a class="pull-left" href="#">
                <img
                  class="media-object"
                  src={book.smallThumbnail}
                  alt="Thumbnail"
                ></img>
              </a>
              <div class="media-body">
                <h4 class="media-heading">{book.title}</h4>
                <p class="text-right">{book.authors}</p>
                <p>{truncateDescription(book.description, 30)}</p>
                <ul class="list-inline list-unstyled">
                  <li>
                    <span>
                      <i class="glyphicon glyphicon-calendar"></i>
                      {book.publishedDate}
                    </span>
                  </li>
                  <li>|</li>
                  <span>language: {book.language}</span>
                  <li>|</li>
                  <li>
                    <span>Category: {book.categories}</span>
                  </li>
                  <li>|</li>
                  <li>
                    <Link to={`/details/${index}`}>Details</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </center>
    </div>
  );
}

export default Result;
