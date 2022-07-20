import React from "react";
import { Link } from "react-router-dom"
import axios from "axios"


const ProductList = (props) => {
  // const { removeFromList } = props;


  const handleDelete = (productId) => {
    axios.delete(`http://localhost:8000/api/products/${productId}`)
      .then(res => {
        props.removeFromList(productId)
      })
      .catch(err => console.error(err));
  }


  return (
    <div className="mx-auto">
      <h1>All Products</h1>
      {props.product.map((p, i) => (
        <div>
          <h3 key={i}>
            <Link to={`/products/${p._id}`}>{p.title}</Link>
          </h3>
          <button onClick={(e)=> handleDelete(p._id)}> Delete</button>
        </div>
      ))}
    </div>
  );
};


export default ProductList;
