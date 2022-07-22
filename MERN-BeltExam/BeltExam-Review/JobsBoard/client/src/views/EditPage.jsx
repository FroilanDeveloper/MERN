import React, {useEffect, useState}from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// 1. Grab id from params and get one job from the dbs when the component is loaded
// 2. dbs : axios - this means that to get the data from the database you need axios to get it
// 3. When the component is load : useEffect
// 4. variable that will be change : useState - this means that because the variable keeps changing we need to use useState to be able to change the variable 
// 5. id from params : useParams


// Have a form, when submit : post at the database
// 1. Input : state to track the changes
// 2. Send into to database : axios


const EditPage = () => {
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [salary, setSalary] = useState(100000)
  const [isRemote, setIsRemote] = useState(true)

  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() =>{
    axios.get(`http://localhost:8000/api/jobs/${id}`)
      .then(res=>{
        const job = res.data
        setTitle(job.title)
        setCompany(job.company)
        setSalary(job.salary)
        setIsRemote(job.isRemote)
      })
      .catch(err=>console.log(err))
  }, [])



  const handleSubmit= (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/jobs/${id}`, {title, company, salary, isRemote})
      .then(res=>navigate(`/jobs/${id}`))
      .catch(err=>console.log(err))
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
        <button type='submit' className='btn btn-success'> Edit Job </button>
        <button type='button' className='btn btn-default'onClick={()=> navigate("/")}> Cancel </button>
      </form>
    </div>
  )
}

export default EditPage