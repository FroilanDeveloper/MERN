import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

// 1. Grab all jobs from the dbs when the component is loaded
// 2. dbs : axios - this means that to get the data from the database you need axios to get it
// 3. When the component is load : useEffect
// 4. variable that will be change : useState - this means that because the variable keeps changing we need to use useState to be able to change the variable 


const Dashboard = (props) => {
  const [pirates, setPirates] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8000/api/pirates`)
    .then(res => setPirates(res.data))
    .catch(err=>console.log(err))
  },[])

  const handleDelete = (deleteId) => {
    axios.delete(`http://localhost:8000/api/pirates/${deleteId}`)
      .then( res=>{
        const filterList = pirates.filter(eachPirate=>eachPirate._id !== deleteId)
        setPirates(filterList)
      })
      .catch(err=> console.log(err))
  }

  return (
    <div>
      <Link to="/pirates/new"> <h3>Add Pirate Crew </h3></Link>
      {
        pirates.map((eachPirate, i)=>{
          return(
            <div>
              <h3 key={i}>
                <img src={eachPirate.imageUrl} />
                <h3>{eachPirate.fullname}</h3>
                <h3><Link to={`/pirates/${eachPirate._id}`} className="btn btn-primary"> View Pirate </Link> </h3>
                <button className='btn btn-danger' onClick={e=>handleDelete(eachPirate._id)}> Delete </button>
              </h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default Dashboard