import {Box, Typography} from '@mui/material';
import React from 'react';
import ProductOne from '../assets/ProductOne.png';
import Button from '@mui/material/Button';

const Info = () => {

  // Business Logic

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '1000px'
        }}
      >
        <Typography variant={'h1'} sx={{padding: '60px 0px 32px 0px'}}>Flooring Solutions</Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'auto auto auto auto'
          }}
        >
          <InfoImage heading={'test'} text={'test'}/>
          <InfoImage heading={'test'} text={'test'}/>
          <InfoImage heading={'test'} text={'test'}/>
          <InfoImage heading={'test'} text={'test'}/>
        </Box>
      </Box>
    </Box>
  )
}

export default Info

interface InfoImageProps {
  heading: string
  text: string
}

const InfoImage = (props: InfoImageProps) => {

  // Business Logic

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${ProductOne})`,
          height: '250px',
          borderRadius: '10px',
          margin: '10px',
          justifyContent: 'left',
        }}
      >
      </Box>
      <Typography variant={'h3'} sx={{padding: '10px 0px 10px 20px', textAlign: 'left'}}>{props.heading}</Typography>
      <Typography variant={'body1'} sx={{padding: '10px 0px 10px 20px', textAlign: 'left'}}>{props.text}</Typography>
      <Button variant="contained">Contained</Button>
    </Box>
  )
}