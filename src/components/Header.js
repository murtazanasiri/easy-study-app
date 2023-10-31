import React from "react";
import { Link } from "react-router-dom";

import "../css/MainStyle.css";

function Header() {
  return (
    <div className="headNav">
      <center>
        <header>
          <Link to="/" className="btn btn-primary">
            Go Back to Search
          </Link>
        </header>
      </center>
    </div>
  );
}

export default Header;
