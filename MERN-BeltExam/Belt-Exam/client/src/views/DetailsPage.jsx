import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


// 1. Grab id from params and get one job from the dbs when the component is loaded
// 2. dbs : axios - this means that to get the data from the database you need axios to get it
// 3. When the component is load : useEffect
// 4. variable that will be change : useState - this means that because the variable keeps changing we need to use useState to be able to change the variable 
// 5. id from params : useParams


const DetailPage = () => {
  const [pirate, setPirate] = useState()
  const [pegLeg, setPegLeg] = useState(true)
  const [eyePatch, setEyePatch] = useState(true)
  const [hookHand, setHookHand] = useState(true)

  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() =>{
    axios.get(`http://localhost:8000/api/pirates/${id}`)
      .then(res=>setPirate(res.data))
      .catch(err=>console.log(err))
  }, [])



  return (
    <div>
      <Link to="/"> Dashboard </Link>
      {
        pirate?
        <div>
          <img src={pirate.imageUrl} />
          <h3>{pirate.catchPhrase}</h3>
          <h1> About </h1>
          <h3> Position: {pirate.position}</h3>
          <h3> Treasures: {pirate.treasureChest}</h3>
          <h3> Peg Leg: {pirate.pegLeg ? "Yes" : "No"}</h3>
          <h3> Eye Patch: {pirate.eyePatch ? "Yes" : "No"}</h3>
          <h3> Hook Hand: {pirate.hookHand ? "Yes" : "No"}</h3>
        </div>:
        <h1> Wrong Id </h1>
      }
    </div>
  )
}

export default DetailPage