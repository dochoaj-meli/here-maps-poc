import React from "react";

const Map = ({ apikey }) => {
  const mapRef = React.useRef(null);

  React.useLayoutEffect(() => {
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
        center: { lat: -33.4030714, lng: -70.58479 },
        zoom: 5,
        pixelRatio: window.devicePixelRatio || 1,
      }
    );

    const behavior = new H.mapevents.Behavior(
      new H.mapevents.MapEvents(createdMap)
    );

    // Instantiate a circle object (using the default style):
    const circle = new H.map.Circle({ lat: 52.51, lng: 13.4 }, 8000);

    // Add the circle to the map:
    createdMap.addObject(circle);

    const ui = H.ui.UI.createDefault(createdMap, defaultLayers);
    // H.ui.ZoomControl();

    return () => {
      createdMap.dispose();
    };
  }, [mapRef]);

  return <div className="map" ref={mapRef} style={{ height: "500px" }} />;
};

export default Map;
