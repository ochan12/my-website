import React from "react";
import { useTheme } from "@mui/material";
import HomeComponent from "components/home/HomeComponent";
import Layout, { siteTitle } from "components/layout/Layout";
import Head from "next/head";

export default function Home() {
  const theme = useTheme();
  return (
    <Layout home>
      <Head>
        <title className="text-3xl font-bold underline">{siteTitle}</title>
      </Head>
      <HomeComponent />
    </Layout>
  );
}
