import { ThemeWrapper } from "components/theme/ThemeWrapper";
import React from "react";
import mixpanel from "mixpanel-browser";
import "styles/global.scss";

mixpanel.init("9a2e1fbb270231f6b2ed1bcf09849de8", { debug: true });

export default function App({ Component, pageProps }: any) {
  mixpanel.track("App");
  return (
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}
