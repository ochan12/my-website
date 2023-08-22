import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import Layout from "components/layout/Layout";
import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";
import mixpanel from "mixpanel-browser";

export default function Travel() {
  const Map = dynamic(() => import("components/maps/Map"), { ssr: false });
  useEffect(() => {
    mixpanel.track("Travel");
  }, []);
  return (
    <Layout>
      <Head>
        <title>Travel</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
          crossOrigin=""
        />
      </Head>
      <Script
        src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
        integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
        crossOrigin=""
      ></Script>
      <Grid
        container
        justifyContent={"center"}
        alignItems="center"
        height={"80vh"}
      >
        <Grid item xs={10} md={10} height={"80vh"}>
          <Map />
        </Grid>
      </Grid>
    </Layout>
  );
}
