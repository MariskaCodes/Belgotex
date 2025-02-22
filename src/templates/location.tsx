/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Sites system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */

import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import * as React from "react";
import Banner from "../components/banner";
import Services from "../components/Services";
import Promotions from "../components/Promotions";
import Info from "../components/Info";
import FAQ from "../components/FAQ";
import NearbyStores from "../components/NearbyStores";
import Contact from "../components/contact";
import Cta from "../components/cta";
import Hours from "../components/hours";
import List from "../components/list";
import PageLayout from "../components/page-layout";
import StaticMap from "../components/static-map";
import "../index.css";
import { Breadcrumbs, Link } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import MapBox from "../components/MapBox";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "3800743",
    //source: "knowledgeGraph",
    destination: "pages",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "description",
      "hours",
      "slug",
      "geocodedCoordinate",
      "services",
      "c_services_test",
      "c_paymentMethod",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["location"],
      entityIds: ["10"],
      //M added this entityIds:
      //M added this savedFilterIds:
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug
    ? document.slug
    : `${document.locale}/${document.address.region}/${document.address.city}/${
        document.address.line1
      }-${document.id.toString()}`;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
    ],
  };
};

// theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#2A2C2F",
    },
  },
  typography: {
    fontFamily: '"Gotham", sans-serif',
    h1: {
      fontSize: 50,
      lineHeight: "35px",
      letterSpacing: "-0.5px",
      fontWeight: 900,
    },
    h2: {
      fontSize: 30,
      fontWeight: 900,
    },
    body1: {
      fontSize: 20,
    },
  },
});

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */
const Location: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    _site,
    name,
    address,
    openTime,
    hours,
    mainPhone,
    geocodedCoordinate,
    services,
    c_services_test,
    c_paymentMethod,
  } = document;

  console.log("document", document);

  return (
    <>
      <ThemeProvider theme={theme}>
        <PageLayout _site={_site}>
          <Breadcrumbs
            sx={{ padding: "5px 5px 16px 230px" }}
            aria-label="breadcrumb"
          >
            <Link fontSize="20" underline="hover" color="inherit" href="/">
              All Locations
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Gauteng
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Johannesburg
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Alberton
            </Link>
          </Breadcrumbs>
          <Banner name={name} address={address} openTime={openTime} />
          <Services name={name} services={c_services_test} />
          <Promotions />
          <MapBox />
          <Info />
          <FAQ />
          <NearbyStores />
        </PageLayout>
      </ThemeProvider>
    </>
  );
};

export default Location;
