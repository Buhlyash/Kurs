import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={style.headerText}>
      {/* <p>{props.text}</p> */}
      <div>
        <Link to="/">Главная</Link>
      </div>
      <div>
        <Link to="/cart">Корзина</Link>
      </div>
    </div>
  );
};

export default Header;
