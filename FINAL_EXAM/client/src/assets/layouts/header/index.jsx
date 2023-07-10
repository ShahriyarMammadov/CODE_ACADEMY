import React from "react";
import "./index.scss";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div id="header">
        <div className="logo">
          <Link to={"/"}>
            <h1>Coacher</h1>
          </Link>
        </div>
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/wishList"}>WishList</NavLink>
          <NavLink to={"/addPage"}>Added</NavLink>
          <NavLink to={"/course"}>Courses</NavLink>
          <NavLink to={"/storie"}>Stories</NavLink>
          <NavLink to={"/webinars"}>Webinars</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/meet"} className="meetBtn">
            MeetMe
          </NavLink>
          <i class="fa-solid fa-bars"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
