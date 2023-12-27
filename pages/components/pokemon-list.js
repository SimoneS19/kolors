const PokemonList = ( {pokemonList} ) => {
  const renderedPokemon = pokemonList.map((pokemon) => {
    return (
      <div>
        {pokemon ? (
          <div>
            <div className="containerCard__namePokemon">{pokemon.name}</div>
            <img src={pokemon.sprites?.front_default} />
            <button><Link href={`/${pokemon.name}`}>Pokemon</Link></button>
          </div>
        ) : null}
      </div>
    );
  });


  return <div>{renderedPokemon}</div>;
}


export default PokemonList;