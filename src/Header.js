import React from "react";
import Nav from "./Nav";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.Header}>
      <img src="./Logo.svg" alt="logo" />
      <Nav />
    </header>
  );
};

export default Header;
