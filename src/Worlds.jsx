import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

function Worlds(props) {

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
        console.log(url);
    
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setWorlds(json);
        })
        .catch(console.error);
      }

    return (
        <div>
                  <div >
        <br></br>
<h2>To locate a world, enter its name in the Search bar.</h2>
<br></br>
        <SearchForm />
        <br></br>
        <SearchResults worlds={worlds} />

      </div>
        </div>
    );
}

export default Worlds;