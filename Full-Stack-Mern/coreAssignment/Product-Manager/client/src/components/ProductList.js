import React from "react";
import axios from "axios";
import { Link } from "react-router-dom"

const ProductList = (props) => {
  return (
    <div className="mx-auto w-25">
      <h1>All Products</h1>
      {props.product.map((product, i) => (
        <h3 key={i}>
          <Link to={`/products/${product._id}`}>{product.title}</Link>
        </h3>
      ))}
    </div>
  );
};

export default ProductList;
