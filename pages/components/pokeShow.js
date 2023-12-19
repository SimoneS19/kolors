// import '../styles/Home.module.scss';

function FpokemonShow({ pokemonShow }) {
    return (
        <div>
            {/* <img src={pokemonShow.urls.small} alt={pokemonShow.alt_description} /> */}
            
            <img src={pokemonShow.sprites.front_default} alt={pokemonShow.name} />
            <p>Nome: {pokemonShow.name}</p>
        </div>
    );
}

export default FpokemonShow;