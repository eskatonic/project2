import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Sectors(props) {
  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    const url = "https://travellermap.com/api/universe";

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        // console.log(json);
        setSectors(res);
        // console.log(json.sectors);
      })
      .catch(console.error);
  }, []);

  if (sectors && sectors) {
    // console.log(sectors.Sectors);
    return (
      <div>
        {/* <h2>Welcome to the 51st Century! Please select a destination:</h2>
        <section className="container">
          <button type="submit">CORE</button>
          <button type="submit">SOLOMANI RIM</button>
          <button type="submit">SPINWARD MARCHES</button>
        </section>
        <h4>Or, if you want to take a tour of everything, check out the</h4>
        <h4>
          <Nav.Link href="map">Map of the Galaxy</Nav.Link>
        </h4> */}
      </div>
    );
  } else {
    return (
      <div className="error-message">
        <h1>LOADING, PLEASE WAIT.</h1>
      </div>
    );
  }
}

export default Sectors;
