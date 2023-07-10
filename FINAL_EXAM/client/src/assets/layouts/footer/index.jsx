import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div className="contact">
        <div className="us">
          <h1>Contact Us</h1>
          <p>2590 Rocky Road Philadelphia, PA 19108</p>
          <div className="about">
            <p>Email:</p>
            <Link to={"/asdas"}>office@example.com</Link>
            <p>Phone:</p>
            <Link to={"/asd"}>+1 215-606-0391</Link>
            <p>Skype:</p>
            <Link to={"/asda"}>LifeCoach</Link>
          </div>
        </div>

        <div className="form">
          <h1>Contact Form</h1>

          <div className="inputs">
            <div className="headerInputs">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <button>Send a Message</button>
        </div>
      </div>
      <div className="footerText">
        <p>© 2018 ThemeStarz, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
