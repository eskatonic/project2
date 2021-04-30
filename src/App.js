import { buildQueries } from '@testing-library/dom';
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Sectors from './Sectors';
import SectorDetails from './SectorDetails';
import Map from './Map';
import Library from './Library';
import Header from './Header';
import Footer from './Footer';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';


function App() {

  const searchOptions = {
    api: 'https://travellermap.com/api',
    endpoint: '/search'
  };

  const [worlds, setWorlds] = useState([]);

  useEffect(() => {
    getWorlds();
  }, []);

  function getWorlds() {
    const searchString = 'Terra';
    const url = `${searchOptions.api}${searchOptions.endpoint}?q=${searchString}`;

    fetch(url)
    .then(response => response.json())
    .then(response => {
      setWorlds(response.worlds);
    })
    .catch(console.error);
  }

  return (

    <div className="App">

      <Header />

      <div >
        <br></br>
<h2>To locate a world, enter its name in the Search bar.</h2>
<br></br>
        <SearchForm />
        <br></br>
        <SearchResults worlds={worlds} />

      </div>

      <main>

      <Route path="/" exact component={Sectors} />
      <Route path="/map" exact component={Map} />
      <Route path="/library" exact component={Library} />
      <Route path="/details/:Abbreviation" component={SectorDetails} />

      </main>

    <Footer />
    </div>

  );

}

export default App;
