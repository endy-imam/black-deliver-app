import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import './Map.css';


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_MAP_API_KEY;


const Map = () => {
  // using Mapbox Map
  const mapContainerRef = useRef(null);


  // Init map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [5, 34],
      zoom: 1.5
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Clean up on unmount
    return () => map.remove();
  }, []);


  return (
    <div className='map-container' ref={mapContainerRef} />
  )
};

export default Map;
