import {Box, Typography} from '@mui/material';
import React from 'react';

type paymentMethodProps = {
  name?: string;
  paymentMethod?: string[];
};


const paymentMethod = (props: paymentMethodProps) => {

  // Business Logic

  return (
    <Box
      sx={{
        textAlign: 'left',
        padding: '40px 0px 0px 230px',
        maxWidth: '900px'
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          textAlign: 'left',
          padding: '30px 0px 0px 0px',
          maxWidth: '900px'
        }}
      >
        <div>
          <Typography padding={'0px 0px 4px 0px'} variant={'h2'}>Payment Methods</Typography>
          <Typography variant={'body1'}>
            <ul>
            {props.paymentMethod?.map(paymentMethod => <li>{paymentMethod}</li>)}
            </ul>
          </Typography>
        </div>
      </Box>
    </Box>
  )
}

export default paymentMethod