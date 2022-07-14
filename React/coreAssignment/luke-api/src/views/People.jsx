import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useParams} from 'react-router-dom'


// 1. get the id from params (useParams)
// 2.1 got to axios to grab info from the api using the above id (axios)
// 2.2 grab info when the page is loaded (useEffect)
// 3. one the json respponce is here, set variable (state)




function People() {
  const {id} = useParams()
  const [person, setPerson] = useState()

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}`)
      .then(response =>{
        setPerson(response.data)
      })
      .catch(err=> console.log(err))
  },[id])


  return (
    <div>
      {
        person&&
        <div>
        <h1> {person.name}</h1>
        </div>
      }
    </div>
  )
}

export default People