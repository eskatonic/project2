import React from "react";
import MapKey from './pictures/travellermapkey.jpg';

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
      </div >
          <img src={MapKey} alt="Map Key"></img>
    </div>
  );
}

export default Map;
