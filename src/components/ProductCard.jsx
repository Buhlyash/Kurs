import React, { useState } from "react";
import imageStock from "../assets/img/image1.jpg";

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
    <div className="item">
      <img className="image" src={imageStock} alt="react" />
      <p className="name">{name}</p>
      <p className="price">{price}</p>
      <div className="counter">
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
