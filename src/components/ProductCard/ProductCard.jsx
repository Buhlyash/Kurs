import React, { useState } from "react";
import imageStock from "../../assets/img/image1.jpg";
import style from "./ProductCard.module.css";

const ProductCard = ({ name, price }) => {
  const [value, setValue] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const onClickAdd = () => {
    setValue(value + 1);
  };

  const onClickShow = () => {
    setIsShown(!isShown);
  };
  return (
    <div className={style.item}>
      <img className={style.image} src={imageStock} alt="react" />
      <p className={style.name}>{name}</p>
      <p className={style.price}>{price}</p>
      <div className={style.counter}>
        <p>{value}</p>
        <button onClick={onClickAdd}>+</button>
      </div>
      <button onClick={onClickShow}>
        {isShown ? "Скрыть описание" : "Показать описание"}
      </button>
      {isShown && <p>Вода обычная</p>}
    </div>
  );
};

export default ProductCard;
