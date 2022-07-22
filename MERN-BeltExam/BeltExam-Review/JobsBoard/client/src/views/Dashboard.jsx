import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

// 1. Grab all jobs from the dbs when the component is loaded
// 2. dbs : axios - this means that to get the data from the database you need axios to get it
// 3. When the component is load : useEffect
// 4. variable that will be change : useState - this means that because the variable keeps changing we need to use useState to be able to change the variable 


const Dashboard = () => {
  const [jobs, setJobs] = useState([]) // were setting the state as an empty variable

  // we need to load the information when we load the component we use useEffect
  useEffect(() => {
    // now we need to make sure we get the information from the dbs using axios.. 
    // we need to look at the routes in the backend server to make sure the routes are matched 
    axios.get("http://localhost:8000/api/jobs")
      // When it loads it shows what I want when I receive information
      // .then(res => console.log(res.data)) to see what we get from the information - to see the information go to the browser and check inspect ~ then console if you see the information then it is working and we are getting data from the dbs
      // then we can change the console.log to setJobs 
      .then(res => setJobs(res.data))
      // when this is gets rejected it will setJobs to empty
      // or you can console.log(err) 
      .catch(err=>console.log(err))
  },[])
  

  const handleDelete = (deleteId) => {
    axios.delete(`http://localhost:8000/api/jobs/${deleteId}`)
      .then( res=>{
        const filterList = jobs.filter(eachJob=>eachJob._id !== deleteId)
        setJobs(filterList)
      })
      .catch(err=> console.log(err))
  }


  // Next step is to show the jobs after getting it from the dbs

  return (
    <div>
      <Link to="/jobs/new"> Create new Job </Link>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th> Title </th>
            <th> Company </th>
            <th> Salary </th>
            <th> Remote? </th>
            <th colSpan={2}> Actions </th>

          </tr>
        </thead>
        <tbody>
          {
            jobs.map((eachJob, i)=>{
              return(
                <tr key={i}>
                  <td> <Link to={`/jobs/${eachJob._id}`}> {eachJob.title} </Link> </td>
                  <td> {eachJob.company} </td>
                  <td> {eachJob.salary} </td>
                  <td> {eachJob.isRemote?"Yes":"No"} </td>
                  <td> <Link to={`/jobs/edit/${eachJob._id}`} className="btn btn-primary"> Edit </Link> </td>
                  <td> <button className='btn btn-danger' onClick={e=>handleDelete(eachJob._id)}> Delete </button> </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard