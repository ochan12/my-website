import React, { useEffect } from "react";
import HomeComponent from "components/home/HomeComponent";
import Layout, { siteTitle } from "components/layout/Layout";
import mixpanel from "mixpanel-browser";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    mixpanel.track("Home");
  }, []);
  return (
    <Layout home>
      <Head>
        <title className="text-3xl font-bold underline">{siteTitle}</title>
      </Head>
      <HomeComponent />
    </Layout>
  );
}
