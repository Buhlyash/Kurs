import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

function Products() {
  // const names = [
  //   { id: "1", name: "Товар 1", price: "100" },
  //   { id: "2", name: "Товар 2", price: "200" },
  //   { id: "3", name: "Товар 3", price: "300" },
  //   { id: "4", name: "Товар 4", price: "400" },
  //   { id: "5", name: "Товар 5", price: "500" },
  // ];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://662a6f5467df268010a3ec68.mockapi.io/item")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <div className="products">
      {products.map((c) => (
        <ProductCard key={c.id} {...c} />
      ))}
    </div>
  );
}

export default Products;
