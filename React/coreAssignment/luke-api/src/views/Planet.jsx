import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useParams} from 'react-router-dom'



const Planet = () => {
  const {id} = useParams()
  const [planets, setPlanets] = useState()



  useEffect(()=>{
    axios.get(`https://swapi.dev/api/planets/${id}`)
    .then(response=>setPlanets(response.data))
    .catch(err=>console.log(err))
  },[id])


  return (
    <div>
      {
        planets&&
        <div>
          <h1>{planets.name}</h1>
        </div>
      }
    </div>
  )
}

export default Planet