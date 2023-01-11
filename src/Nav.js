import React from "react";
import classes from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.Nav}>
      <ul className={classes.navList}>
        <li className={classes.navItem}>
          <a href="./"> Home </a>
        </li>
        <li className={classes.navItem}>
          <a href="./about"> About </a>
        </li>
        <li className={classes.navItem}>
          <a href="./menu"> Menu </a>
        </li>
        <li className={classes.navItem}>
          <a href="./reservations"> Reservations </a>
        </li>
        <li className={classes.navItem}>
          <a href="./order"> Order Online </a>
        </li>
        <li className={classes.navItem}>
          <a href="./login"> Login </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
