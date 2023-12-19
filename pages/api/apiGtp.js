// import axios from 'axios';

// const useGPT = async (term) => {
//   const response = await axios.get('https://pokeapi.co/api/v2/pokemon', {
//     // headers: {
//     //   Authorization: 'Client-ID KqqZM4m5NlQ-tg8cge5rXF1brX83tbAYTrg0kGnKOXE',
//     // },
//     params: {
//       query: term,
//       per_page: 12,
//     },
//   });

//   return response.results;
// };

// export default useGPT;


import axios from 'axios';

const useGPT = async (term) => {
  // Eseguire una chiamata per ottenere informazioni sul Pokémon specifico (ad esempio, Pikachu)
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${term.toLowerCase()}`);
    
  // Estrai il nome e l'URL dell'immagine dal risultato della chiamata
  const pokemonData = {
    name: response.data.name,
    image: response.data.sprites.front_default,
  };

  return pokemonData;
};

export default useGPT;
