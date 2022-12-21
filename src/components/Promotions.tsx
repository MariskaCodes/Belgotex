import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import banner from '../assets/PromoOne.png';

const Promotions = () => {

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
        <Typography variant={'h1'} sx={{padding: '230px 0px 32px 0px'}}>Shop Promotions</Typography>
        <Carousel
          indicators={false}
          interval={10000}
          animation={'fade'}
          NextIcon={<ChevronRightIcon id="banner-NextIcon-Button"/>}
          PrevIcon={<ChevronLeftIcon id="banner-PrevIcon-Button"/>}
        >
          <Banner
            heading={'Shop Hilton Luxury Vinyl Tile'}
            text={`
            Paying tribute to the raw beauty of nature, this wood-look luxury vinyl tile collection is design for
            medium-traffic
            areas in the residential space. The soft acoustic benefits of these vinyl tiles create an ambient
            environment and
            guarantee ease of maintenance for modern living.
          `}
          />
          <Banner
            heading={'Shop Hilton Luxury Vinyl Tile'}
            text={`
            Paying tribute to the raw beauty of nature, this wood-look luxury vinyl tile collection is design for
            medium-traffic
            areas in the residential space. The soft acoustic benefits of these vinyl tiles create an ambient
            environment and
            guarantee ease of maintenance for modern living.
          `}
          />
        </Carousel>
      </Box>
    </Box>
  )
}

interface BannerProps {
  text: string
  heading: string
}

const Banner = (props: BannerProps) => {

  // Business Logic

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${banner})`,
          height: '616px',
        }}
      >
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto 200px'
        }}
      >
        <div>
          <Typography variant={'h2'} sx={{textAlign: 'left'}}>{props.heading}</Typography>
          <Typography variant={'body1'} sx={{textAlign: 'left'}}>
            {props.text}
          </Typography>
        </div>
        <div>
          <Button>Get a quote</Button>
        </div>
      </Box>
    </Box>
  )
}


export default Promotions