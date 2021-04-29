import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Sectors(props) {
    const [sectors, setSectors] = useState([]);

    useEffect(() => {
      const url = "https://travellermap.com/api/universe";
  
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setSectors(json);
        })
        .catch(console.error);
    }, []);
  
  return(
    <div>
    <h2>Welcome to the 51st Century!  Please select a destination:</h2>
      <section className="container">
        <button type="submit">CORE</button>
        <button type="submit">SOLOMANI RIM</button>
          <button type="submit">SPINWARD MARCHES</button>
     </section>
     </div>
  );
  
}

export default Sectors;