import React from "react";
import Iframe from 'react-iframe';
import MapKey from "./pictures/travellermapkey.jpg";

function Map(props) {
  return (
    <div>
      <div>
        <h2>Map of the Galaxy</h2>
        <h3>Scroll to zoom in/out, click and hold to move.</h3>
        <Iframe
          title="map"
          src="https://travellermap.com/go/spin/1910?style=print"
          width="600px"
          height="600px"
          display="initial"
          position="relative"
        ></Iframe>
        <br></br>
      </div>
      <img src={MapKey} alt="Map Key"></img>
    </div>
  );
}

export default Map;
