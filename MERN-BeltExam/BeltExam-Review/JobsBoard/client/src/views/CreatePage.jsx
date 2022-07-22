import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

// Have a form, when submit : post at the database
// 1. Input : state to track the changes
// 2. Send into to database : axios


const CreatePage = () => {
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [salary, setSalary] = useState(100000)
  const [isRemote, setIsRemote] = useState(true)

  const [errors, setErrors] = useState([])

  // this mean it will let us navigate back to the dashboard
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:8000/api/jobs`, {title, company, salary, isRemote})
    // when submit is successful it will navigate use to the dashboard
      .then(res=>navigate("/"))
      .catch(err=>{
        const errResponse = err.response.data.errors
        const tempErrArr = []
        for(const eachKey in errResponse){
          tempErrArr.push(errResponse[eachKey].message)
        }
        setErrors(tempErrArr)
      })
  }  


  return (
    <div>
      <Link to="/"> Dashboard </Link>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label className='form-label'> Title </label>
          <input type="text" name='title' value={title} onChange={(e)=>setTitle(e.target.value)} className='form-control' />
        </div>
        <div>
          <label className='form-label'> Company </label>
          <input type="text" name='company' value={company} onChange={(e)=>setCompany(e.target.value)} className='form-control' />
        </div>
        <div>
          <label className='form-label'> Salary </label>
          <input type="number" name='salary' value={salary} onChange={(e)=>setSalary(e.target.value)} className='form-control' />
        </div>
        <div>
          <input type="checkbox" name='isRemote' checked={isRemote} onChange={(e)=>setIsRemote(e.target.checked)} className='form-check-input' />
          <label className='form-check-label'> Remote? </label>
        </div>
        <button type='submit' className='btn btn-success'> Create Job </button>
        <button type='button' className='btn btn-default'onClick={()=> navigate("/")}> Cancel </button>
      </form>
      {
        errors.map((err, i)=>{ // this is to show the error message on our page
          return(
            <h3 style={{color: "red"}}> {err} </h3>
          )
        })
      }
    </div>
  )
}

export default CreatePage