import React from 'react'


const DisplayPokemonNames = (props) => {
  const {pokemonNameList} = props;
  return (
    <div>
      {pokemonNameList.map((pokemon, i) => <li key={i}>{pokemon.name}</li>)}
    </div>
  )
}

export default DisplayPokemonNames