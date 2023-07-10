import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="logo">
          <Link to={"/"}>
            <img
              src="https://preview.colorlib.com/theme/courses/assets/img/logo/logo.png"
              alt=""
            />
          </Link>
          <p>
            The automated process starts as soon as your clothes go into the
            machine.
          </p>

          <div className="icons">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-pinterest"></i>
          </div>
        </div>
        <div className="solution">
          <h1>Our Solution</h1>
          <div className="links">
            <Link to={"/asd"}>Design & creative</Link>
            <Link to={"/asdew"}>Telecommunication</Link>
            <Link to={"/hggf"}>Restaurant</Link>
            <Link to={"/loginPage"}>Programming</Link>
            <Link to={"/dasf"}>Architecture</Link>
          </div>
        </div>
        <div className="solution">
          <h1>Support</h1>
          <div className="links">
            <Link to={"/sdf"}>Design & creative</Link>
            <Link to={"/loginPage"}>Telecommunication</Link>
            <Link to={"/sadsa"}>Restaurant</Link>
            <Link to={"/note"}>Programming</Link>
            <Link to={"/archive"}>Architecture</Link>
          </div>
        </div>
        <div className="solution">
          <h1>Company</h1>
          <div className="links">
            <Link to={"/dgs"}>Design & creative</Link>
            <Link to={"/dfa"}>Telecommunication</Link>
            <Link to={"/jksf"}>Restaurant</Link>
            <Link to={"/djdskf"}>Programming</Link>
            <Link to={"/asj"}>Architecture</Link>
          </div>
        </div>
      </footer>

      <div className="footerBottom">
        <h1>
          Copyright ©2023 All rights reserved | This template is made with by
          Shahriyar
        </h1>
      </div>
    </>
  );
};

export default Footer;
