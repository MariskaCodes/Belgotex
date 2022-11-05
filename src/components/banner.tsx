import * as React from "react";
import {Box} from '@mui/material';
import banner from "../assets/Header_1920x406.jpg";

export type Address = {
  line1: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};

type Banner = {
  name?: string;
  address?: Address;
  openTime?: string;
  children?: React.ReactNode;
};


const Banner = (props: Banner) => {
  const { name, address, children } = props;

  return (
    <>
    <Box
      sx={{
        backgroundImage: `url(${banner})`,
        height: "400px",
      }}
    >

    </Box>
    </>
  );
};

export default Banner;
