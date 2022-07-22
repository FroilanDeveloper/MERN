import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

// Have a form, when submit : post at the database
// 1. Input : state to track the changes
// 2. Send into to database : axios


const CreatePage = () => {
  const [fullname, setFullName] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [treasureChest, setTreasureChest] = useState(1)
  const [position, setPosition] = useState("")
  const [catchPhrase, setCatchPhrase] = useState("")
  const [pegLeg, setPegLeg] = useState(true)
  const [eyePatch, setEyePatch] = useState(true)
  const [hookHand, setHookHand] = useState(true)

  const [errors, setErrors] = useState([])

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:8000/api/pirates`, {fullname, imageUrl, treasureChest, position, catchPhrase, pegLeg, eyePatch, hookHand})
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
          <label className='form-label'> Pirate Name </label>
          <input type="text" name='fullname' value={fullname} onChange={(e)=>setFullName(e.target.value)} className='form-control' />
        </div>
        <div>
          <label className='form-label'> Image Url </label>
          <input type="text" name='imageUrl' value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} className='form-control' />
        </div>
        <div>
          <label className='form-label'> Pirate Catch Phrase: </label>
          <input type="text" name='catchPhrase' value={catchPhrase} onChange={(e)=>setCatchPhrase(e.target.value)} className='form-control' />
        </div>
        <div>
          <label className='form-label'> # of Treasure Chests: </label>
          <input type="number" name='treasureChest' value={treasureChest} onChange={(e)=>setTreasureChest(e.target.value)} className='form-control' />
        </div>
        <div>
          <label className='form-label'> Crew Position </label>
          <select name="position" value={position} onChange={(e) => setPosition(e.target.value)}>
            <option value=""> </option>
            <option value="Captain"> Captain </option>
            <option value="First Mate"> First Mate </option>
            <option value="Quarter Master"> Quarter Master </option>
            <option value="Boot Swain"> Bootswain </option>
            <option value="Powder Monkey"> Powder Monkey </option>
          </select>
        </div>
        <div>
          <input type="checkbox" name='pegLeg' checked={pegLeg} onChange={(e)=>setPegLeg(e.target.checked)} className='form-check-input' />
          <label className='form-check-label'> Peg Leg </label>
        </div>
        <div>
          <input type="checkbox" name='eyePatch' checked={eyePatch} onChange={(e)=>setEyePatch(e.target.checked)} className='form-check-input' />
          <label className='form-check-label'> Eye Patch </label>
        </div>
        <div>
          <input type="checkbox" name='hookHand' checked={hookHand} onChange={(e)=>setHookHand(e.target.checked)} className='form-check-input' />
          <label className='form-check-label'> Hook Hand </label>
        </div>
        <button type='submit' className='btn btn-success'> Add Pirate </button>
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