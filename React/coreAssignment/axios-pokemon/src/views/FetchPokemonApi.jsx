import DisplayPokemonNames  from '../components/DisplayPokemonNames'
import {useState} from 'react'
import axios from 'axios'

const FetchPokemonApi = () => {
  const [pokemons, setPokemons] = useState([])

  const fetchPokemonWithAxiosAwait =  async() => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    setPokemons(response.data.results)

    
  }

  return (
    <>
    <button onClick={fetchPokemonWithAxiosAwait}>Fetch All Pokemons</button>
    <div>
      <ul>
        <DisplayPokemonNames pokemonNameList={pokemons}/>
      </ul>
      
    </div>
    </>
  )
}

export default FetchPokemonApi