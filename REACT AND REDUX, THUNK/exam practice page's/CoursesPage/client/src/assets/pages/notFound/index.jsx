import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div id="errorPage">
      <section class="error-container">
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
        <span class="zero">
          <span class="screen-reader-text">0</span>
        </span>
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
      </section>
      <div class="link-container">
        <Link to={"/"} className="more-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
