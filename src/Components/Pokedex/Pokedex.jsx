import React from 'react'
import './Pokedex.css'
import Search from '../Search/Search'
import PokemonList from "../PokemonList/PokemonList.jsx";



function Pokedex() {
  return (
    <div className="pokedex-wrraper">
       
      <Search />
      <PokemonList />
    </div>
  )
}

export default Pokedex
