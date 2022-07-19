import React from "react";
import Main from "./views/Main";
import Details from "./views/Details";
import { Route, Routes, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
