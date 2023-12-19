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
    console.log(`Hai cercato questo pokemon: ${term}`)
    console.log(`Ciao`, result);
  };
  console.log(pokemon);
  return (
    <div>
      ciao
      {/* RISULTATO RICERCA: {pokemon.length} */}
      <SearchBar onSubmit={handleSubmit} />
      <PokemonList pokemonList={pokemon} />
      {pokemon ? pokemon.name : null}
      {pokemon ? (
        <div>
          {pokemon.sprites?.front_default}
        </div>
      ) : null}
    </div>
  );
};