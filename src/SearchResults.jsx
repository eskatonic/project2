import React from 'react';
// import Card from 'react-bootstrap/Card';

function SearchResults({worlds}) {
    console.log(worlds);
    // return early if no worlds found.
    if (!worlds.length) {
        return <h2>No Worlds Found!</h2>
    }

    return (

        <div className="results">
            {worlds.map(world => (
                <div key={world.Uwp} className="worldTile">
                    <ul>
                        <p>NAME: {world.Results.Items.World.Name}</p>
                    </ul>
                </div>
            ))}
        </div>
    );

}

export default SearchResults;