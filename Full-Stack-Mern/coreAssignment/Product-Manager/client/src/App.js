import React from "react";
import Main from "./views/Main";
import Details from "./views/Details";
import UpdateProduct from "./views/UpdateProduct"
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
