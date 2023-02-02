import Layout from '@/components/Layout'
import PokedexContext from '@/contexts/PokedexContext'
import React, { useContext } from 'react'

const Home = () => {
  const {pokedexes} = useContext(PokedexContext);
  return (
    <Layout>{pokedexes.map((poke) => {
      return <p key={poke.name}>{poke.name}</p>
    })}</Layout>
  )
}

export default Home