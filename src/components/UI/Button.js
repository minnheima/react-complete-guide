import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"} // props로 부터 동적인 값으로 받아오거나 없으면 button
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
