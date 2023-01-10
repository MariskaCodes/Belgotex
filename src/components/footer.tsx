import * as React from "react";
import {Box, Typography} from '@mui/material';
import Button from '@mui/material/Button';

const Footer = () => {

  // Business Logic

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '470px auto 470px',
        width: '100%'
      }}
    >
      <Box>
        <Typography sx={{textTransform: 'uppercase'}} variant={'h2'}>Floors</Typography>
        <Typography variant={'caption'}>ask and we'll answer</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <Typography variant={'caption'}>Designed by Sauce Advertising</Typography>
      </Box>
      <div>
        <Button>Top</Button>
      </div>
    </Box>
  )
}

export default Footer