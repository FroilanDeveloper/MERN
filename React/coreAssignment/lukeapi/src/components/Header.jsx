import axios from "axios";
import { useState, useEffect } from "react";

const Header = () => {
  const [category, setCatergory] = useState("");
  const [id, setId] = useState("");


  const FetchSWAPI = (e) => {
    e.prevent.default();
  };

  return (
    <form>
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
