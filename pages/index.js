import { useState } from "react";

import SearchBar from "./components/search-bar";
import PokeApi from "./api/pokemon-api";
import '../styles/home.scss';

import axios from 'axios';
import Link from 'next/link';


//se voglio utilizzare repo devo fare: props.repo -> props = insieme più grande -> repo = sotto insieme di props
export default function App( props ) {

  /* 1 */
  /*  pokemonList è un array, setPokemonList utilizzato per inserire
      nuovi elementi nell'array, props.pokemonHome lo mettiamo tra le
      parentesi di useState perchè dobbiamo settare il valore iniziale
      dello stato
  */

  //spreed di decomprensione
  const [pokemonList, setPokemonList] = useState(props.pokemonHome);

  /* LO SALTA PER FARLO DOPO -> 6 (CALLBACK CON SearcBar) */
  //ogni volta che viene fatta una ricerca su SearchBar viene fatta una callBack su handleSubmit
  const handleSubmit = async (term) => {
    const result = await PokeApi(term);   //api chimata per la barra di ricerca
    setPokemonList([result]);   //viene aggiornato il result -> tra [] perchè setPokemonList è un array
  };


  return (
    <div>
      {/* immagine mate hub */}
      <div className="containerLogo">
        <img className="containerLogo__logo" src="/images/mate.png" alt="logo" />
      </div>
      
      {/* 4 -> BARRA DI RICERCA */}
      {/* SearchBar che effettua una callBack su handleSubmit */}
      <SearchBar onSubmit={handleSubmit} />

      {pokemonList ? (
        <div className="containerCard">
          {/*
            Allora, questa mappatura viene fatta perchè noi abbiamo bisogno di ogni singolo
            elemento di pokemonList (è un array di oggetti), quindi ceh è tipo una mappatura
            di un insieme più piccolo
          */}
      
          {/* 3 -> SPAMPA DEI 12 POKEMON */}{/* 6 -> QUESTA MAPPATURA VIENE CHIAMATA ANCORA CON LA SearchBAr -> PORTA A NUOVA PAGINA -> SLUG */}
          {pokemonList.map((pokemon, index) => (
            //messo qua key perchè è il contenitore ci tutto il pokemon
            <div key={index} className="containerCard__pokemon">
            
              {/* nome */}
              <div className="containerCard__namePokemon"><h1>{pokemon.name}</h1></div>
            
              {/* immagine */}
              {pokemon.sprites ? (
                <img src={pokemon.sprites.front_default} />
              ): null}
                  
              {/* pagina per pokemon */}
              <button className="containerCard__buttonSinglePokemon">
                <Link
                  href={{
                    pathname: `/${pokemon.name}`
                  }}
                >
                  Pokemon
                </Link>
              </button>
            </div>
          ))}
        </div>
      ) : null }
    </div>
  );
}


/* 2 -> TUTTA LA FUNZIONE LA PER COME TERZA */
// Funzione per ottenere dati durante l'esecuzione del server
export async function getServerSideProps() {
  //chiamata api -> con limite 12 -> quindi 12 elementi
  const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0';
  const response = await axios.get(API_URL);
  //pendiamo elementi oggetto
  const pokemonHome = response.data.results;    //path
  //props.pokemonHome
  return { props: { pokemonHome } };
}