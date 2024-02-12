"use client";
import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef } from "react";

function Map() {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [19.94, 50.0607],
      style: "mapbox://styles/mapbox/dark-v11",
      zoom: 12.7,
    });
  }, []);
  return <div ref={mapContainer} className="h-full " />;
}

export default Map;
