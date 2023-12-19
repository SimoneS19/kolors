import axios from 'axios';

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon";

const PokeApi = async (term) => {
  // https://pokeapi.co/api/v2/pokemon/{id o nome}/
  const response = await axios.get(POKEMON_API, {
    headers: {
      Authorization: 'Client-ID olZ7p-7hBZ8HKmYRNx0IDKjHY9LkgGVG4qK_Qw1UpOg',
    },
    params: {
      query: 'ditto',
    }
  });
  
  return response.results;
};

export default PokeApi;