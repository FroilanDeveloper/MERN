import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const [category, setCatergory] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const FetchSWAPI = (e) => {
    e.preventDefault();
    navigate(`${category}/${id}`);
  };

  return (
    <form onSubmit={FetchSWAPI}>
      <label>Search for: </label>
      <select
        name="category"
        value={category}
        onChange={(e) => setCatergory(e.target.value)}
      >
        <option hidden disabled value="">
          -- Select Category --{" "}
        </option>
        <option value="People">People</option>
        <option value="Planets">Planets</option>
      </select>
      <label> | Id: </label>
      <input
        type="number"
        name="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button type="submit"> Submit </button>
    </form>
  );
};

export default Header;
