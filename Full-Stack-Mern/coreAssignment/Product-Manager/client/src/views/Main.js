import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = (props) => {
  const [product, setProduct] = useState([]);
  // const [loaded, setLoaded] = useState(false) // 

  
  
  useEffect(() => {
    axios.get(`http://localhost:8000/api/products`)
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => console.error(err));
  },[]); // if we put product in the 2nd arguement it will run axios non-stop 
  // refresh to make sure the list gets updated 


  return (
    <div className="App">
      <ProductForm />
      <hr />
      <ProductList product={product}/>
    </div>
  );
};

export default Main