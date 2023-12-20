import { useState } from "react";
import SearchBar from "./components/searchBar";
import PokemonList from "./components/pokemonList";
import PokeApi from "./api/pokeApi";
import '../styles/Home.scss';
import Link from 'next/link'


export default function App() {
  const [pokemon, setPokemon] = useState();

  const handleSubmit = async (term) => {
    const result = await PokeApi(term);
    setPokemon(result);
  };

  console.log('Pokemon:', pokemon);

  return (
    <div>
      <div className="contenitorimg">
        <img
          className="immagine"
          src='/images/artl.svg'
        />
      </div>
      {/* RISULTATO RICERCA: {pokemon.length} */}
      <SearchBar onSubmit={handleSubmit} />
      <PokemonList pokemonList={pokemon} />
      
      <div className="card">
        <div className="pokemon">
          {pokemon ? (
            <div>
              <div className="name-poke">{pokemon.name}</div>
              <img src={pokemon.sprites?.front_default} />
              <button><Link href={`/${pokemon.name}`}>Pokemon</Link></button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};