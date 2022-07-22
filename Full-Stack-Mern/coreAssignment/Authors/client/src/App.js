import './App.css';
import Dashboard from "./views/Dashboard";

import { Route, Routes, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/authors" element={<CreateAuthor/>} />
          <Route path="/authors/:id/edit" element={<UpdateAuthor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App