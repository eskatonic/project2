import React from "react";
// import './Map.css';
// import MapKey from '../pictures/travellermapkey.jpg'; <-- import throws errors

function Map(props) {
  return (
    <div>
        <div>
        <h2>Map of Known Space</h2>
        <h3>Scroll to zoom in/out, click and hold to move.</h3>
      <iframe
        title="map"
        src="https://travellermap.com/go/spin/1910?style=print"
      ></iframe>
      <br></br>
      </div>
          <img src={require('./pictures/travellermapkey.jpg')} alt="Map Key"></img>
    </div>
  );
}

export default Map;
