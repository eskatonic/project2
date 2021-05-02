import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Map from './Map';
import Library from './Library';
import Header from './Header';
import Footer from './Footer';
import Worlds from './Worlds';


function App() {



  return (

    <div className="App">

      <Header />
      <br></br>

      <main>
      <Route path="/" exact component={Map} />
      <Route path="/worlds" exact component={Worlds} />
      <Route path="/map" exact component={Map} />
      <Route path="/library" exact component={Library} />

      </main>

    <Footer />
    </div>

  );

}

export default App;
