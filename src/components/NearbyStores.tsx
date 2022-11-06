import {Box, Typography} from '@mui/material';
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';

const NearbyStores = () => {

  // Business Logic

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        marginTop: '50px'
      }}
    >
      <Box
        sx={{
          width: '1000px'
        }}
      >
        <Typography variant={'h1'} sx={{padding: '60px 0px 32px 0px', color: 'white'}}>Nearby John Dore Stores</Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'auto auto auto'
          }}
        >
          <div>
            <Typography variant={'h4'} sx={{padding: '10px 0px 10px 0px', color: 'white'}}>Parkmeadows</Typography>
            <Typography variant={'body1'} sx={{padding: '10px 0px 10px 0px', color: 'white'}}>
              Open Now ...
            </Typography>
          </div>
          <div>
            <Typography variant={'h4'} sx={{padding: '10px 0px 10px 0px', color: 'white'}}>Parkmeadows</Typography>
            <Typography variant={'body1'} sx={{padding: '10px 0px 10px 0px', color: 'white'}}>
              Open Now ...
            </Typography>
          </div>
          <div>
            <Typography variant={'h4'} sx={{padding: '10px 0px 10px 0px', color: 'white'}}>Parkmeadows</Typography>
            <Typography variant={'body1'} sx={{padding: '10px 0px 10px 0px', color: 'white'}}>
              Open Now ...
            </Typography>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

export default NearbyStores