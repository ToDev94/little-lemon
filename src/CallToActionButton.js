import React from "react";
import classes from "./CallToActionButton.module.css";

const CallToActionButton = ({ children }) => {
  return <button className={classes.CTAButton}>{children}</button>;
};

export default CallToActionButton;
