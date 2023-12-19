import PokemonShow from './pokeShow';

function FpokemonList({ pokemonList }) {
    if (!Array.isArray(pokemonList)) {
        return null;
    }

    const renderedPokemon = pokemonList.map((pokemon) => {
        return <PokemonShow key={pokemon.id} pokemonShow={pokemon} />;
      });

    return <div>{renderedPokemon}</div>;
}

export default FpokemonList;