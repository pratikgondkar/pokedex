import React from 'react'
import './Pokedex.css'
import Search from '../Search/Search'

function Pokedex() {
  return (
    <div className="pokedex-wrraper">
       <h1 id='pokedex-headding'>Pokedex</h1>
      <Search />
    </div>
  )
}

export default Pokedex
