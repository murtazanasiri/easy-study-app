import React from "react";
import { Link, useParams } from "react-router-dom";
import "../css/MainStyle.css";

function Details({ searchData }) {
  const { bookId } = useParams();
  const book = searchData[bookId];

  if (!book) {
    return <div>No book found</div>;
  }

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="col-md-2 img">
              <img src={book.smallThumbnail} alt={book.title} />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h3 className="card-title">{book.title}</h3>
                <p className="card-text">Author: {book.authors}</p>
                <p className="card-text">
                  Published Date: {book.publishedDate}
                </p>
                <p className="card-text">Language: {book.language}</p>
                <p className="card-text">Categories: {book.categories}</p>
                <p className="card-text">Description: {book.description}</p>
                <Link to="/results" className="btn btn-primary">
                  Back to Results
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
