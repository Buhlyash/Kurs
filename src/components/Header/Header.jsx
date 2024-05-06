import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import imageLogo from "../../assets/img/logo.svg";

const Header = (props) => {
  return (
    <div className={style.headerDiv}>
      {/* <p>{props.text}</p> */}

      <div>
        <Link to="/">
          <img className={style.image} src={imageLogo} alt="logo" />
        </Link>
      </div>
      <div>
        <Link to="/my">Аккаунт</Link>
      </div>
      <div>
        <Link to="/my/orderlist">Заказы</Link>
      </div>
      <div>
        <Link to="/cart">Корзина</Link>
      </div>
    </div>
  );
};

export default Header;
