import React, { useRef, useLayoutEffect } from "react";

const Map = ({ apikey = null }) => {
  if (!apikey) {
    return null;
  }

  const mapRef = useRef(null);

  useLayoutEffect(() => {
    if (!mapRef.current) return;

    const H = window.H;
    const platform = new H.service.Platform({
      apikey,
    });

    const defaultLayers = platform.createDefaultLayers();

    const createdMap = new H.Map(
      mapRef.current,
      defaultLayers.vector.normal.map,
      {
        zoom: 10,
        center: { lat: -33.4030714, lng: -70.58479 },
      }
    );

    const ui = H.ui.UI.createDefault(createdMap, defaultLayers);

    return () => {
      createdMap.dispose();
    };
  }, [mapRef]);

  return <div className="map" ref={mapRef} style={{ height: "500px" }} />;
};

export default Map;
