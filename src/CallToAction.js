import React from "react";
import classes from "./CallToAction.module.css";
import CallToActionButton from "./CallToActionButton";

const CallToAction = () => {
  return (
    <section className={classes.CTA}>
      <div className={classes.container}>
        <div>
          <h1>Little lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with modern twist
          </p>
          <CallToActionButton> Reserve a table </CallToActionButton>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default CallToAction;
