import React from "react";
import "../css/ResultStyle.css";

function Result() {
  // Example data (replace with data from API)
  const bookData = [
    {
      title: "React in Action",
      authors: "Mark Tielens Thomas",
      publishedDate: "2018-07-08",
      language: "en",
      categories: "Computer",
      smallThumbnail:
        "http://books.google.com/books/content?id=S8gBMQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      description:
        "Summary React in Action introduces front-end developers to the React framework and related tools. This clearly written, example-rich book begins by introducing you to React, diving into some of the fundamental ideas in React, and working with components. In the second section, you'll explore the different ways that data works in React as well as learning more about components.",
    },

    {
      title:
        "Beginning ReactJS Foundations Building User Interfaces with ReactJS",
      authors: "Chris Minnick",
      publishedDate: "2022-02-03",
      language: "en",
      categories: "Computer",
      smallThumbnail:
        "http://books.google.com/books/content?id=J89cEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      description:
        "Quickly learn the most widely used front-end development language with ease and confidence React JS Foundations: Building User Interfaces with ReactJS - An Approachable Guide walks readers through the fundamental concepts of programming with the explosively popular front-end tool known as React JS. Written by an accomplished full-stack engineer, speaker, and community organizer, React JS Foundations teaches readers how to understand React and how to begin building applications with it. The book: Explains and clarifies technical terminology with relevant and modern examples to assist people new to programming understand the language Helps experienced programmers quickly get up to speed with React Is stocked throughout with practical and applicable examples of day-to-day React work Perfect for beginner",
    },
  ];

  return (
    <div class="container">
      <center>
        {bookData.map((book, index) => (
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
