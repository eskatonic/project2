import React from "react";
// import Card from 'react-bootstrap/Card';

function SearchResults({ worlds }) {
  // return early if no worlds found.
  if (!worlds) {
    return <h2>No Worlds Found!</h2>;
  } else {
    return (
      <div>
        {worlds.map((item) => (
          <div>
            <h2>WORLD NAME: {item.World.Name}</h2>
            <h4>SECTOR: {item.World.Sector}</h4>
            <h4>UWP: {item.World.Uwp}</h4>
            <br></br>
          </div>
        ))}
      </div>
    );
  }
}

export default SearchResults;
