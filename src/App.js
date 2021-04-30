import { buildQueries } from '@testing-library/dom';
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
// import Sectors from './Sectors';
import SectorDetails from './SectorDetails';
import Map from './Map';
import Library from './Library';
import Header from './Header';
import Footer from './Footer';
import Worlds from './Worlds';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';


function App() {



  return (

    <div className="App">

      <Header />
      <br></br>


      <main>

      {/* <Route path="/" exact component={Sectors} /> */}
      <Route path="/worlds" exact component={Worlds} />
      <Route path="/map" exact component={Map} />
      <Route path="/library" exact component={Library} />
      <Route path="/details/:Abbreviation" component={SectorDetails} />

      </main>

    <Footer />
    </div>

  );

}

export default App;
