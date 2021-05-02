import React from "react";
// import Card from 'react-bootstrap/Card';

function SearchResults({ worlds }) {
  // return early if no worlds found.
  if (!worlds) {

    return <h2>No Worlds Found!</h2>;

  } else {
    // console.log(worlds);
    // console.log(typeof(worlds));
    // console.log(Object.entries(worlds));
    return (
        <div className="results">
          {worlds.map(item => <h4>WORLD NAME: {item.World.Name} SECTOR: {item.World.Sector} PROFILE: {item.World.Uwp}</h4>)}
        </div>
      );
  }
}

export default SearchResults;
