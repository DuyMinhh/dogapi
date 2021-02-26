import React from "react";
import './search.css';
// import { Select } from 'antd';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

function Search() {
    // const [pokemon, setPokemon] = useState('');
    //  const [loading, setLoading] = useState('');
    // const [search, setSearch] = useState('');
    // const [filterPokemon, setfilterPokemon] = useState([]);
    //   useEffect(() =>

    //   useEffect(() => {
    //     const filterPokemon = pokemon.filter( pokemon => { 
    //       return pokemon.name.toLowerCase().includes(search.toLowerCase())
    //     })
    //   }, [search, pokemon])
      

  return (
      <div className="search">
        <div className="pokemon-search">
            <p>Name of Number</p>
            <input className="text-search" type="text" placeholder="Search"/>
            <button type="submit" className="btn-search">
            Search
            </button>
        </div>
          <div className="-search">
            
          </div>
      </div>

  );
}

export default Search;

