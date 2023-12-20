import FpokemonShow from './pokeShow';

function FpokemonList({ pokemonList }) {
    if (!Array.isArray(pokemonList)) {
        return null;
    }

    const renderedPokemon = pokemonList.map((pokemon) => {
        return (
            <div>
            <h1>Lista dei Pokémon:</h1>
              <ul>
                {pokemonData.map(pokemon => (
                  <li key={pokemon.name}>{pokemon.name}</li>
                ))}
              </ul>
          </div>
        );
      });

    return <div>{renderedPokemon}</div>;
}

export default FpokemonList;