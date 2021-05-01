import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

function Worlds(props) {
  const searchOptions = {
    api: "https://travellermap.com/api",
    endpoint: "/search",
  };

  const [worlds, setWorlds] = useState([]);
  const [searchString, setSearchString] = useState("Terra");
  const [worldArray, setWorldArray] = useState([]);

  useEffect(() => {
    getWorlds();
  }, []);

  function getWorlds() {
    // const searchString = 'Terra';
    const url = `${searchOptions.api}${searchOptions.endpoint}?q=${searchString}`;
    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        Object.entries(json.Results.Items);
        console.log(json);
          setWorlds(json.Results.Items.World);
        })
        .catch(console.error);
      }
      
  // let tempWorlds = Object.values(worlds);
  // console.log(tempWorlds);
      
  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // getWorldArray();
    getWorlds();
  }

  // function getWorldArray() {
  //   fetch(worlds)
  //   .then((results) => results.json())
  //   .then((results) => {
  //     console.log(results);
  //     setWorldArray(results);
  //     console.log(results);
  //   })
  //   .catch(console.error);
  // }


  // setWorldArray(Object.entries(worlds));
  // console.log(worldArray);


  return (
    <div>
      <div>
        <br></br>
        <h2>To locate a world, enter its name in the Search bar.</h2>
        <br></br>

        <SearchForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchString={searchString}
        />

        <br></br>

        <SearchResults worlds={worlds} />
      </div>
    </div>
  );
}

export default Worlds;
