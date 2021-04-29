import { buildQueries } from '@testing-library/dom';
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Sectors from './Sectors';
import SectorDetails from './SectorDetails';
import Map from './Map';
import Library from './Library';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Footer from './Footer';

function App() {

  return (

    <div className="App">

      <Header />


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
