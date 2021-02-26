import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Header from './Components/header/header';
import Search from './Components/search/search';
import { getPokemon, getAllPokemon} from './Components/services/pokemon';
import Card from './Components/card';

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

  return (
    <div className="app">
      <Router>
        <Header/>
        <Search/>
        <createPokemonCard/>
        <div>
          {loading ? <p style={{ textAlign: 'center'}}>Loading...</p>: (
            <div className="container">
              <div className="grid-container">
                {pokemonData.map((pokemon, i) =>{ 
                  return <Card key={i} pokemon={pokemon}/>
                })}
              </div>
              <div className="btn">
              <button onClick={prev}>Prev</button>
              <button onClick={next}>Next</button>
            </div>
            </div>
          )
          }
        </div>
      </Router>
    </div>
  );
}

export default App;
