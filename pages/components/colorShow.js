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


// Importa la tua funzione useGPT
import useGPT from '../api/useGPT'; // Assicurati di specificare il percorso corretto

// Componente in cui vuoi visualizzare i dati
function Pokemon({ searchTerm }) {
  // Chiamata alla funzione useGPT con il termine desiderato (ad esempio, nome di un Pokémon)
  const pokemonData = useGPT(searchTerm);


  // Passa i dati del Pokémon al componente ColorShow
  return (
    <div>
      <h2>Dettagli del Pokémon</h2>
      <ColorShow pokemonData={pokemonData} />
    </div>
  );
}

export default Pokemon;
