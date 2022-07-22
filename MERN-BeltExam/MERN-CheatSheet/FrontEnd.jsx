// BootStrap 

// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">


// ~~~~~~~~~~~~~~~~~~ Setup ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// I Start by making my Project Folder
// then within that Project Folder I create a folder called server
// In that server folder I create 4 more folders called config, controllers, models, routes

// We can create this folders either manually or in the terminal

// touch - new file
// mkdir - new folder

// git bash terminal
// mkdir ~ProjectName~
// cd ~ProjectName~
// npx create-react-app client
// mkdir server
// cd server
// touch server.js 
// mkdir config controllers models routes

// now we got all the folder, its time to install all packages

// ~~~~~ Backend(server)~~~~~

// npm init -y
// npm install express mongoose cors 

// To start the server
// nodemon server.js



// ~~~~~ FrontEnd(client) ~~~~~

// npx create-react-app client

// npm install axios react-router-dom 

// To start the client
// npm start




// ********************** Backend(server) *****************************


// ~~~~~~~~~~~~~~~~~~~~~~ configs ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const mongoose = require('mongoose');
//                                Make sure to change DB name for every project
mongoose.connect("mongodb://localhost/Product_db", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Established a connection to the database"))
  .catch(err => console.log("Something went wrong when connecting to the database", err));


// ~~~~~~~~~~~~~~~~~~~~~~ routes ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const ProductController = require("../controllers/product.controller");
module.exports = function (app) {
  app.get("/api/products", ProductController.allProducts); // Get All
  app.get("/api/products/:id", ProductController.oneProduct); // Get One product
  app.post('/api/products', ProductController.addProduct); // Add one product
  app.put('/api/products/:id', ProductController.updateProduct); // update product
  app.delete('/api/products/:id', ProductController.deleteProduct); // delete product
};



// ~~~~~~~~~~~~~~~~~~~~~~ controllers ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const {Product} = require("./../models/product.model")


// Get all 
module.exports.allProducts = (req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.json(err))
}


// Get one
module.exports.oneProduct = (req, res) => {
  // Grab id from params
  const id = req.params.id
  Product.findOne({_id: id})
    .then(oneProduct => res.json(oneProduct))
    .catch(err => res.json(err))
}


// Add one product
module.exports.addProduct = (req, res) => {
  Product.create(req.body)
    .then(product => res.json(product))
    .catch(err => res.json(err))
}


// Update product
module.exports.updateProduct = (req, res) => {
  // Grab id from params
  const id = req.params.id
  const updateValue = req.body
  // update: criteria, updatedValue, options
  Product.findOneAndUpdate(
    { _id: id },
    updateValue,
    { new: true, runValidators: true }
  )
    .then(updateProduct => res.json(updateProduct))
    .catch(err => res.json(err))
}


// Delete product
module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id : req.params.id })
    .then(message => res.json(message))
    .catch(err => res.json(err))
}


// ~~~~~~~~~~~~~~~~~~~~~~ models ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String },
    price: { type: Number },
    description: { type: String }
  },
  { timestamps: true }
);
module.exports.Product = mongoose.model("Product", ProductSchema);




// ~~~~~~~~~~~~~~~~~~~~~~ server.js ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const express = require("express");
const cors = require('cors')
const app = express();
const port = 8000;
require('./config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

require('./routes/product.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));









// ****************** Frontend(client) ****************************

// ~~~~~~~~~~~~~~~~~~ App.js ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Routes

import { Route, Routes, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/products/:id/edit" element={<UpdateProduct />} />
          <Route path="/products/:id/edit" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// ~~~~~~~~~~~~~~~~~~ useEffect ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Here we are using useEffect with 2nd arguement being refresh
// What refresh is doing is that, when click submit on a form our Dashboard or Main page will get updated 


const [refresh, setRefresh] = useState(true)

  const refreshList =() =>{
    setRefresh(!refresh) 
  }

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/songs`)
      .then(res=>setProduct(res.data))
      .catch(err=>console.log(err))
  },[refresh]) 


// ~~~~~~~~~~~~~~~~~~ useState & Axios & Props ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Example is used in Product Form 

// 1. get id from params : useParmas
// 2. display info on load : useEffect
// 3. to change the info : useState
// 4. grab info from backend : axios 
// 5. navigate is use to go to route in the parenthesis. : useNavigate

import React, { useState } from "react";
import axios from "axios";

//         Part 2 - We are making props as our variable 
const Product = (props) => {
  //keep track of what is being typed via useState hook
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");


  // onSubmitHandler will make sure that 
  const onSubmitHandler = (e) => {
    // It prevents the default behavior (for a form this prevents it from refreshing the page)
    e.preventDefault();
    //make a post request to create a new person
    axios
      .post("http://localhost:8000/api/products", { // Using axios to connect our front end to the backend server. 
        title,
        price,
        description,
      })
      .then((res) => {   
        props.refreshList() // <---- Part 2 - Then we are emplementing our props here in line 76 by using props.refreshList. Once we click submit, the form which were getting props from will change.

        // Here were making sure that once we submit our form it will
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
      <form onSubmit={onSubmitHandler}> // Were emplementing our onSubmitHandler inside form 
        <h3>
          <label>Title</label>
          <br />
          <input
            type="text" // onChange is changing the data that is being inputted into the form
            onChange={(e) => setTitle(e.target.value)} // we are changing the state value of title using setTitle
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


// ~~~~~~~~~~~~~~~~~~ handleDelete ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const handleDelete = (productId) => {
  axios.delete(`http://localhost:8000/api/products/${productId}`)
    .then(res => {
      props.removeFromList(productId)
    })
    .catch(err => console.error(err));
}


<button onClick={(e)=> handleDelete(p._id)}> Delete</button>


















