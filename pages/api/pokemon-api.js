import axios from 'axios';

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/";

const PokeApi = async (term) => {
  const API_URL = `${POKEMON_API}${term ? term : null}`
  // https://pokeapi.co/api/v2/pokemon/{id o nome}/
  const response = await axios.get(API_URL);
  

  return response.data;
};


export default PokeApi;