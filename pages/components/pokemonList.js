import PokemonShow from './pokeShow';


function FpokemonList({ pokemonList }) {
    const renderedPokemon = pokemonList.map((pokemon) => {
        return <PokemonShow key={pokemon.id} pokemonShow={pokemon} />;
    });

    return (
        <div>
            {renderedPokemon}
            {/* pokemonShow: {colorS.length} */}
        </div>
    );
}

export default FpokemonList;