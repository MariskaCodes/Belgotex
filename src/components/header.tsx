import * as React from "react";
import Cta from "../components/cta";
import Button from '@mui/material/Button';
import {Box, Typography} from '@mui/material';

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/turtlehead-tacos",
  },
];

const Header = () => {
  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '470px auto 470px',
        backgroundColor: '#F0F0F0',
        // padding: '30px auto 10px',
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
        <Button>News</Button>
        <Button>Help Articles</Button>
        <Button>Approved Installers</Button>
      </Box>
      <Button>Get a quote</Button>
    </Box>
  )
};

export default Header;
