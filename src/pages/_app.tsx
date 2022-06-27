import { ThemeWrapper } from "components/theme/ThemeWrapper";
import React from "react";
import mixpanel from "mixpanel-browser";
import "styles/global.scss";
import Head from "next/head";

mixpanel.init(process.env.NEXT_PUBLIC_ANALYTICS!, { debug: true });

export const siteTitle = "Mateo";

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://img.icons8.com/color/48/undefined/laptop--v1.png"
        />
        <meta name="description" content="Mateo's personal site" />
        <meta
          property="og:image"
          content={`https://riggoch.vercel.app/img/mateo_barcelona.jpeg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    </>
  );
}
