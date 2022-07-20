import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = (props) => {
  const [product, setProduct] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const refreshList = () => {
    setRefresh(!refresh);
  };


  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products`)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data)
      })
      .catch((err) => console.error(err));
  }, [refresh]); // if we put product in the 2nd arguement it will run axios non-stop
  // refresh to make sure the list gets updated


  const removeFromList = (productId) => {
    setProduct(product.filter((product) => product._id != productId));
  };

  return (
    <div className="mx-auto text-center">
      <ProductForm  refreshList={refreshList}/>
      <hr />
      <ProductList product={product} removeFromList={removeFromList} />
    </div>
  );
};

export default Main;
