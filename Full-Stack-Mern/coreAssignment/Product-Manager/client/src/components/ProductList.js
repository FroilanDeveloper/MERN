import React from "react";
import axios from "axios";
import { Link } from "react-router-dom"

const ProductList = (props) => {
  return (
    <div className="App">
      {props.product.map((product, i) => (
        <h3 key={i}>
          <h1>All Products</h1>
          <div>
            <Link to={`/products/${product._id}`}>{product.title}</Link>
          </div>
        </h3>
      ))}
    </div>
  );
};

export default ProductList;
