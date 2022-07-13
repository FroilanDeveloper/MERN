import DisplayPokemonNames  from '../components/DisplayPokemonNames'
import {useState} from 'react'

const FetchPokemonApi = () => {
  const [pokemons, setPokemons] = useState([])

  const fetchPokemonWithAwait =  async() => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    const res = await response.json()
    setPokemons(res.results)
    
  }

  return (
    <>
    <button onClick={fetchPokemonWithAwait}>Fetch All Pokemons</button>
    <div>
      <ul>
        <DisplayPokemonNames pokemonNameList={pokemons}/>
      </ul>
      
    </div>
    </>
  )
}

export default FetchPokemonApi