import React from "react";
import HPlatform, { HMap, HMapPolyLine } from "react-here-map";

const Map = ({ apikey }) => {
  return (
    <HPlatform apikey={apikey}>
      <HMap
        style={{
          height: "400px",
          width: "800px",
        }}
        mapOptions={{
          center: {
            lat: -33.4030714,
            lng: -70.58479,
          },
        }}
      />
    </HPlatform>
  );
};

export default Map;
