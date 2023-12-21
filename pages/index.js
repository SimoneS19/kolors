import { useState } from "react";

import SearchBar from "./components/searchBar";
// import PokemonList from "./components/pokemonList";
import PokeApi from "./api/pokeApi";
import '../styles/Home.scss';

import Link from 'next/link';

//se voglio utilizzare repo devo fare: props.repo -> props = insieme più grande -> repo = sotto insieme di props



export default function App() {
  //creiamo 2 costanti, pokemon sarà effettivamente il pokemon oggetto
  const [pokemon, setPokemon] = useState();

  //creiamo una costante che aspetta di ricevere il termine term
  const handleSubmit = async (term) => {
    //questa costante apetta le api di PokeApi che corrispondono a term
    const result = await PokeApi(term);
    setPokemon(result);
  };

  //stampiamo l'oggetto pokemon
  console.log('Pokemon:', pokemon);
  
  return (
    <div>
      {/* il contenitore che contiene l'immagine ArtCode */}
      <div className="contenitorimg">
        <img
          className="immagine"
          src='/images/artl.svg'
        />
      </div>
      {/* RISULTATO RICERCA: {pokemon.length} */}

      {/* la barra di ricerca */}
      <SearchBar onSubmit={handleSubmit} />

      {/* <PokemonList pokemonList={pokemon} /> */}

      <div className="card">
        <div className="pokemon">
          {/* chiediamo se pokemon esiste */}
          {pokemon ? (
            //se esiste ci stampa la roba seguente:
            <div>
              {/* nome del pokemon */}
              <div className="name-poke">{pokemon.name}</div>
              {/* immagine del pokemon */}
              <img src={pokemon.sprites?.front_default} />
              {/* bottone che porta alla pagina per ogni pokemon */}
              <button>
                <Link
                  href={{
                    //qua ci indireizza alla pagina che corrisponde al pokemon cercato
                    pathname: `/${pokemon.name}`
                  }}
                >
                  Pokemon
                </Link>
              </button>
            </div>
            //se esiste il comento è tutto ok
          ) : null }
        </div>
      </div>
    </div>
  );
};