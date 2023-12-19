// // import '../styles/Home.module.scss';

// function ColorShow({ Color }) {
//     return (
//         <div>
//             {/* <img src={Color.urls.small} alt={Color.alt_description} /> */}
            
//             {Color.name}
//         </div>
//     );
// }

// export default ColorShow;


import useGPT from '../api/useGPT';

function Pokemon({ searchTerm }) {
  const pokemonData = useGPT(searchTerm);


  return (
    <div>
      <h2>Dettagli del Pokémon</h2>
      <ColorShow pokemonData={pokemonData} />
    </div>
  );
}

export default Pokemon;
