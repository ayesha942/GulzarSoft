import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductList;
