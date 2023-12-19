// import '../styles/Home.module.scss';

function FpokemonShow({ pokemonShow }) {
    return (
        <div>
            <img src={pokemonShow.urls.small} alt={pokemonShow.alt_description} />
            
            {pokemonShow.alt_description}
        </div>
    );
}

export default FpokemonShow;