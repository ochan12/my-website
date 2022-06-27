import { ThemeWrapper } from "components/theme/ThemeWrapper";
import React from "react";
import mixpanel from "mixpanel-browser";
import "styles/global.scss";

mixpanel.init(process.env.NEXT_PUBLIC_ANALYTICS!, { debug: true });

export default function App({ Component, pageProps }: any) {
  return (
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}
