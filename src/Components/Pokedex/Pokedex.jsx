import React from 'react'
import './Pokedex.css'
import Search from '../Search/Search'
import PokemonList from '../Components/PokemonList/PokemonList.jsx';


function Pokedex() {
  return (
    <div className="pokedex-wrraper">
       <h1 id='pokedex-headding'>Pokedex</h1>
      <Search />
      <PokemonList />
    </div>
  )
}

export default Pokedex
