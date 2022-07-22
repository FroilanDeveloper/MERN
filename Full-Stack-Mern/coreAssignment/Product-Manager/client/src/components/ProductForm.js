import React, { useState } from "react";
import axios from "axios";


const Product = (props) => {
  //keep track of what is being typed via useState hook
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");


  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    //make a post request to create a new person
    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => {
        props.refreshList()
        setTitle("")
        setPrice("")
        setDescription("")
        console.log(res)
      })
      .catch((err) => console.log(err));
  };
  //onChange to update title, price, description
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <h3>
          <label>Title</label>
          <br />
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </h3>
        <h3>
          <label>Price</label>
          <br />
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </h3>
        <h3>
          <label>Description</label>
          <br />
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </h3>
        <input type="submit" />
      </form>
  </div>
  );
};

export default Product