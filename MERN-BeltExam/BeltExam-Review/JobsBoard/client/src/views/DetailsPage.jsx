import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


// 1. Grab id from params and get one job from the dbs when the component is loaded
// 2. dbs : axios - this means that to get the data from the database you need axios to get it
// 3. When the component is load : useEffect
// 4. variable that will be change : useState - this means that because the variable keeps changing we need to use useState to be able to change the variable 
// 5. id from params : useParams



const DetailsPage = () => {
  const [job, setJob] = useState()

  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() =>{
    axios.get(`http://localhost:8000/api/jobs/${id}`)
      .then(res=>setJob(res.data))
      .catch(err=>console.log(err))
  }, [])

  const handleDelete = () => {
    // delete from dbs 
    // redirect
    axios.delete(`http://localhost:8000/api/jobs/${id}`)
      .then( res=>navigate("/"))
      .catch(err=> console.log(err))
  }

  return (
    <div>
      <Link to="/"> Dashboard </Link>
      {
        job?
          <div>
            <h3> Title: {job.title} </h3>
            <h3> Company: {job.company} </h3>
            <h3> Salary: {job.salary} </h3>
            <h3> Remarks: {job.isRemote && "Remote job"} </h3>
            <button className='btn btn-danger' onClick={handleDelete}> Delete </button>
          </div>:
          <h1>Wrong Id </h1>
      }
    </div>
  )// if remote is true then it will say "Remote job" line 34
}

export default DetailsPage