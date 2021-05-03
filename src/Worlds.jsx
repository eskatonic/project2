import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

function Worlds(props) {
  const searchOptions = {
    api: "https://travellermap.com/api",
    endpoint: "/search",
  };

  const [worlds, setWorlds] = useState([]);
  const [searchString, setSearchString] = useState();

  useEffect(() => {
    getWorlds();
  }, []);

  function getWorlds() {
    const url = `${searchOptions.api}${searchOptions.endpoint}?q=${searchString}`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setWorlds(json.Results.Items);
      })
      .catch(console.error);
  }

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getWorlds();
  }

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
