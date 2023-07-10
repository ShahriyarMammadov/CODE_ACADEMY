import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  const [classList, setclassList] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
      setclassList(true);
    } else {
      setclassList(false);
    }
  });

  return (
    <header className={classList ? "header" : null}>
      <div className="logo">
        <Link to={"/"}>
          <img
            src="https://preview.colorlib.com/theme/courses/assets/img/logo/logo.png"
            alt=""
          />
        </Link>
      </div>
      <nav className="navigator">
        <div className="link">
          <Link to={"/"}>Home</Link>
          <NavLink to={"/courses"}>Courses</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/blog"}>Blog</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
        <div className="button">
          <button className="button-48" role="button">
            <span>Join</span>
          </button>
          <Link to={"/loginPage"}>
            <button className="button-48 sha" role="button">
              <span>Log In</span>
            </button>
          </Link>
        </div>
      </nav>

      <i className="fa-solid fa-bars"></i>
    </header>
  );
};

export default Header;
