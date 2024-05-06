import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/productsSlice";
import style from "./Products.module.css";

function Products() {
  const products = useSelector((state) => state.products.products);

  console.log(products);

  const dispatch = useDispatch();

  const fetchItems = () => {
    axios
      .get("https://662a6f5467df268010a3ec68.mockapi.io/item")
      .then((res) => {
        dispatch(setProducts(res.data));
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // const AddProduct = () => {
  //   axios
  //     .post(
  //       "https://662a6f5467df268010a3ec68.mockapi.io/item",
  //       {
  //         id: "6",
  //         name: "Ponchiki",
  //         price: 50,
  //       },
  //       { "content-type": "application/json" }
  //     )
  //     .then((res) => {
  //       fetchItems();
  //       console.log(res.data);
  //     });
  // };

  return (
    <div className={style.products}>
      {/* <button onClick={AddProduct}></button> */}
      {products.map((c) => (
        <ProductCard key={c.id} {...c} />
      ))}
    </div>
  );
}

export default Products;
