import { useState } from "react";
import SearchBar from "./components/searchBar";
import PokemonList from "./components/pokemonList";
import PokeApi from "./api/pokeApi";
import '../styles/Home.scss';

export default function App() {
  const [pokemon, setPokemon] = useState([])

  const handleSubmit = async (term) => {
    const result = await PokeApi(term);
    setPokemon(result);
    console.log(`Hai cercato questo colore: ${term}`)
  };

  return (
    <div>
      <div className="colorcount">
        RISULTATO RICERCA: {pokemon.length}
      </div>
      <SearchBar onSubmit={handleSubmit} />
      <PokemonList pokemonList={pokemon} />
    </div> 
  );
};