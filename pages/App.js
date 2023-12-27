import React, { useState, useCallback } from 'react';
import SearchBar from './components/search-bar';
import PokemonList from './components/pokemon-list';
import getPokemon from './api/pokemon-api';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const handleSubmit = useCallback(async (term) => {
    try {
      // Chiamata API per ottenere i dati dei Pokémon
      const result = await getPokemon(term);

      if (result) {
        console.log(result);
        setPokemonList([result]); // Aggiorna lo stato con un array contenente il risultato della ricerca
        console.log(`Hai cercato questo Pokémon: ${term}`);
      } else {
        console.log('Errore nella chiamata API o nessun risultato trovato.');
      }
    } catch (error) {
      console.error('Errore durante la ricerca:', error);
    }
  }, []);

  return (
    <div>
      <PokemonList pokemonList={pokemonList} /> {/* Visualizza la lista di Pokémon */}
      <SearchBar onSubmit={handleSubmit} /> {/* Barra di ricerca */}
    </div>
  );
}

export default App;
