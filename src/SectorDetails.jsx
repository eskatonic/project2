import React, { useState, useEffect } from 'react';

function SectorDetails(props) {
    let birdId = props.match.params.id;
  const [bird, setBird] = useState({});

  useEffect(() => {
    const url = `https://audubon-api.herokuapp.com/api/birds/${birdId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBird(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="details-container">
      <img src={bird.image} alt={bird.name} />
      <div className="details">
        <h2>{bird.name}</h2>
        <h3>{bird.genus}</h3>
        <h4>Conservation Status</h4>
        <p>{bird.conservationStatus}</p>
          Read More
      </div>
    </div>
  );
}

export default SectorDetails;