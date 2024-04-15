import React, { useState } from 'react'
import './Pokedex.css'
import Search from '../Search/Search'
import PokemonList from "../PokemonList/PokemonList.jsx";
import PokemonDetails from '../PokemonDetails/PokemonDetails.jsx';



function Pokedex() {

  const [searchTerm, setSearchterm] = useState('');



  return (
    <div className="pokedex-wrraper">
       
      <Search updateSearchTerm={setSearchterm} />
      {/* {prev.current} */}
     { (!searchTerm) ? <PokemonList /> : <PokemonDetails key={searchTerm} pokemonName={searchTerm} />}
    </div>
  )
}

export default Pokedex
