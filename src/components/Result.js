import React from "react";
import "../css/ResultStyle.css";

function Result({ searchData }) {
  if (searchData.length === 0) {
    return <p>No results found for the given search query.</p>;
  }

  return (
    <div class="container">
      <center>
        {searchData.map((book, index) => (
          <div class="well">
            <div class="media">
              <a class="pull-left" href="#">
                <img class="media-object" src={book.smallThumbnail}></img>
              </a>
              <div class="media-body">
                <h4 class="media-heading">{book.title}</h4>
                <p class="text-right">{book.authors}</p>
                <p>{book.description}</p>
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
