import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = (props) => {
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    axios.get(`http://localhost:8000/api/products`)
      .then(res => {
        setProduct(res.data);
        setLoaded(true);
      })
      .catch(err => console.error(err));
  },[product]); 


  return (
    <div className="App">
      <ProductForm />
      <hr />
      {loaded && <ProductList product={product}/>}
    </div>
  );
};

export default Main