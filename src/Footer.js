import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <img
        src="./restauranfood.jpg"
        alt="restaurant"
        width="173px"
        height="274.22px"
      />
      <div>
        <h3>Navigation</h3>
        <ul>
          <li>
            <a href="./"> Home </a>
          </li>
          <li>
            <a href="./about"> About </a>
          </li>
          <li>
            <a href="./menu"> Menu </a>
          </li>
          <li>
            <a href="./reservations"> Reservations </a>
          </li>
          <li>
            <a href="./order"> Order Online </a>
          </li>
          <li>
            <a href="./login"> Login </a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li> Address </li>
          <li> Phone number </li>
          <li> Email </li>
        </ul>
      </div>
      <div>
        <h3>Social Media Links</h3>
        <ul>
          <li> Address </li>
          <li> Phone number </li>
          <li> Email </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
