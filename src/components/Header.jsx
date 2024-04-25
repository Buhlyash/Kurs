import React from "react";
import style from "./Header.module.css";

const Header = (props) => {
  return <div className={style.headerText}>{props.text}</div>;
};

export default Header;
