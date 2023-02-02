import { Enrty } from '@/types/pokedex'
import React from 'react'

const PokemonItem:React.FC<Enrty> = (pokemon) => {
  return (
    <div>{pokemon.pokemon_species.name}</div>
  )
}

export default PokemonItem