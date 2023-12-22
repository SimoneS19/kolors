import { useState } from "react";
import { useEffect } from 'react';

import '../styles/Home.scss';

import Link from 'next/link'
import Head from 'next/head';
import axios from 'axios';


//gli passiamo props -> il return dell altra funzione
export default function Single( props ) {
  /*
  in pratica questa è una pagina slug, vuol dire che è più o meno tutto uguale o
  simile alla pagina home e quindi cambia di poco
  */

  //creiamo 2 costanti, pokemon sarà effettivamente il pokemon oggetto
  const [pokemon, setPokemon] = useState();

  /*
  utiliziamo useEffect, che in pratica è un gancio che consente di
  gestire ed eseguire alcuni effetti collaterali, tipo:
      - recupuro dei dati
      - aggiornamento diretto del DOM
  
  (se non ci fosse stato li avrebbe stampati all infinito, poi avrebbe creato bug ed errori) 
  */

  // --> gli passiamo useEffect con props, perchè ogni volta che props si modifica viene rifatto useEffect
  useEffect(() => {
    setPokemon(props);
  }, [props]);

  console.log('Pokemon', props);

  //stampiamo l'oggetto pokemon
  return (
    <div>
      {/* modifichiamo il titolo della pagina con il nome del pokemon cercato */}
      <Head>
        <title>{pokemon}</title>
      </Head>

      {/* il contenitore che contiene l'immagine ArtCode */}
      <div className="contenitorimg">
        <img
          className="immagine"
          src='/images/artl.svg'
        />
      </div>

      {/* <PokemonList pokemonList={pokemon} /> */}

      <div className="card">
        <div className="pokemon">
          {/* chiediamo se pokemon esiste */}
          {pokemon ? (
            //se lo trova ci stamperà queste cose sotto
            <div>
              {/* nome del pokemon */}
              <div className="name-poke">{pokemon.name}</div>
              <br/>
              {/* immagine del pokemon */}
              <div className="name-poke">{pokemon.id}</div>
              <br/>
              {/* immagine del pokemon */}
              <img src={pokemon.sprites?.front_default} alt='Pokemon'/>
              <br/>
              {/* bottone che porta alla pagina home */}
              <button><Link href={`/`}>home</Link></button>
            </div>
          ) : <p>Caricamento..</p>}
        </div>
      </div>
    </div>
  );
};


//dobbiamo ricreare il processo di call api, lo facciamo in una funzione esterna che poi richiamiamo
export async function getServerSideProps({ query }) {
  console.log('Questo lo sto consolloggando:', query);
  const term = query.slug;
  const API_URL = `https://pokeapi.co/api/v2/pokemon/${term ? term : null}`;
  // https://pokeapi.co/api/v2/pokemon/{id o nome}/
  const response = await axios.get(API_URL);
  return { props: response.data };
};

//la funzione passa props