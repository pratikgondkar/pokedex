import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList(url, type) {
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        pokedexUrl: url,
        nextUrl: '',
        prevUrl: ''
    });

    async function downloadPokemons() {
        setPokemonListState((state) => ({...state, isLoading:true}));
        const response = await axios.get(pokemonListState.pokedexUrl);  //this downloads list of 20 pokemons

        const pokemonResults = response.data.results; // we get the array of pokemons from results

        console.log("response ise",response.data.pokemon);
        console.log(pokemonListState)
        setPokemonListState((state) => ({
            ...state, 
            nextUrl: response.data.next, 
            prevUrl: response.data.previous 
        }))
        
        //iterating over the array of pokemons, and using their url, to create an array of promises
        // that will download those 20 pokemons
        if(type) {
           setPokemonListState((state) => ({
            ...state,
            pokemonList: response.data.pokemon.slice(0, 5) 

           }))
        } else {
            const pokemonResultsPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));

            // passing that promise array to axios.all
            const pokemonData = await axios.all(pokemonResultsPromise); // array of 20 pokemon detailed data
            console.log(pokemonData);

            // now iterate on the data of each pokemon, and extract id, name, image, types
            const pokeListResults = pokemonData.map((pokeData) => {
                const pokemon = pokeData.data;
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny ,
                    types: pokemon.types
                }
            });
            console.log(pokeListResults);
            setPokemonListState((state) => ({
                ...state, 
                pokemonList: pokeListResults,  
                isLoading: false 
            }));
        }
    }

    useEffect(() => {
        downloadPokemons();
    },[pokemonListState.pokedexUrl]);

    return [pokemonListState, setPokemonListState]

}

export default usePokemonList;