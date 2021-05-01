import React from 'react';
// import Card from 'react-bootstrap/Card';

function SearchResults({worlds}) {
    // Object.entries(worlds);
    console.log(worlds);
    console.log(worlds);
    // return early if no worlds found.
    if (worlds) {

        console.log(worlds);

        return (

            <div className="results">
                <h2>{worlds}</h2>
            </div>
        )
    } else {
        console.log(worlds);
        // console.log(worlds.length);

        return <h2>No Worlds Found!</h2>
};

}

export default SearchResults;