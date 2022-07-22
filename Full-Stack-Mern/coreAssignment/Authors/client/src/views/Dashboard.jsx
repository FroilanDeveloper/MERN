import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Dashboard = (props) => {
  const [author, setAuthor] = useState([]);
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

  const handleDelete = (productId) => {
    axios.delete(`http://localhost:8000/api/products/${productId}`)
      .then(res => {
        removeFromList(productId)
      })
      .catch(err => console.error(err));
  }


  return (
    <div className="mx-auto text-center">
      <div>
        <Link to={`/authors`} > Create New Author </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th><h3>Author</h3></th>
            <th><h3>Actions</h3></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{fullname}</td>
            <td><Link to={`/authors/${author._id}/edit`} > Edit </Link> | <button onClick={(e)=> handleDelete(a._id)}> Delete</button> </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;