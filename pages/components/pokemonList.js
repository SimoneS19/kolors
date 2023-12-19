import ColorShow from './pokeShow';


function FpokemonList({ pokemonList }) {
    const renderedPokemon = pokemonList.map((pokemon) => {
        return <ColorShow key={pokemon.id} pokemonShow={pokemon} />;
    });

    return (
        <div>
            {renderedPokemon}
            {/* ColorList: {colorS.length} */}
        </div>
    );
}

export default FpokemonList;