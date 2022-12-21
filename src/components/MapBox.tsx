import {Box} from '@mui/material';
import React, {useEffect, useRef, useState} from 'react';
import Button from '@mui/material/Button';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaXNrYWNvZGVzIiwiYSI6ImNsOWZoanA1MzJwbTQ0MW12anhoamw2dnQifQ.C0a4oWDv32ddTyA5cT-uOA';

const MapBox = () => {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    // @ts-ignore
    map.current = new mapboxgl.Map({
      // @ts-ignore
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <Box
      sx={{
        position: 'absolute',
        width: '348px',
        height: '524px',
        top: '480px',
        left: '1200px',
        border: '1px solid black',
        backgroundColor: 'white',
        display: 'grid',
        gridTemplateRows: '200px auto auto auto auto auto auto'
      }}
    >
      <Box
        sx={{
          padding: '5px'
        }}
      >
        <div ref={mapContainer}/>
      </Box>
      <div>
        <LocationOnOutlinedIcon/>
        Address
      </div>
      <div>
        <LocalPhoneOutlinedIcon/>
        Phone
      </div>
      <div>
        <AccessTimeOutlinedIcon/>
        HOURS
      </div>
      <div>
        <Button variant={'contained'}>Call Now</Button>
      </div>
      <div>
        <Button variant={'contained'}>Get Directions</Button>
      </div>
      <div>
        <Button variant={'contained'}>Get a Quote</Button>
      </div>
    </Box>
  )
}

export default MapBox