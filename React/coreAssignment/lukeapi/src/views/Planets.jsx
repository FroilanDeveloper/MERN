import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const Planets = () => {
  const { id } = useParams()
  const [planet, setPlanet] = useState()

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`)
      .then(response => {
        setPlanet(response.data)
      })
      .catch(err => console.log(err))
  }, [id])

  return (
    <form>
      <div>
        {
        planet&&
          <div>
            <h1> {planet.name}</h1>
            <h3>Climate: {planet.climate}</h3>
            <h3>Terrain: {planet.terrain}</h3>
            <h3>Surface Water: {planet.surface_water}</h3>
            <h3>Population: {planet.population}</h3>
          </div>
        }
      </div>
    </form>
  )
}

export default Planets