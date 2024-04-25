import React from "react";
import ProductCard from "./ProductCard";

function Products() {
  const names = [
    { id: "1", name: "Товар 1", price: "100" },
    { id: "2", name: "Товар 2", price: "200" },
    { id: "3", name: "Товар 3", price: "300" },
    { id: "4", name: "Товар 4", price: "400" },
    { id: "5", name: "Товар 5", price: "500" },
  ];
  return (
    <div className="products">
      {names.map((c) => (
        <ProductCard key={c.id} {...c} />
      ))}
    </div>
  );
}

export default Products;
