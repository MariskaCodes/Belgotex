import {Box, Typography} from '@mui/material';
import React from 'react';

type ServicesProps = {
  name?: string;
  services?: string[];
};


const Services = (props: ServicesProps) => {

  // Business Logic

  return (
    <Box
      sx={{
        textAlign: 'left',
        padding: '40px 0px 0px 230px',
        maxWidth: '900px'
      }}
    >
      <Typography padding={'0px 0px 16px 0px'} variant={'h1'}>{props.name}</Typography>
      <Typography variant={'body1'}>
        Our story began in 1990 with Theo. JD established the company (then known as John Dore
        Carpeting) as a family business that primarily was involved in installations. JD has since
        evolved to include 9 Franchises and 4 affiliates nationally whilst maintaining a company
        culture reminiscent of a family. Over the years, JD expanded our service offering to
        incorporate our consultative services which aides our clients to select ideal applications for
        their interior needs.
      </Typography>
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
          <Typography padding={'0px 0px 4px 0px'} variant={'h2'}>Services Offered</Typography>
          <Typography variant={'body1'}>
          <ul>
            {props.services?.map(service => <li>{service}</li>)}
            </ul>
          </Typography>
        </div>
        <div>
          <Typography padding={'0px 0px 4px 0px'} variant={'h2'}>Payment Methods</Typography>
          <Typography variant={'body1'}>
            <ul>
              <li>Cash</li>
              <li>Card</li>
              <li>Contactless Payment</li>
            </ul>
          </Typography>
        </div>
      </Box>
    </Box>
  )
}

export default Services