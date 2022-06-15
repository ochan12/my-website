import { ThemeWrapper } from "components/theme/ThemeWrapper";
import React from "react";
import "styles/global.scss";

export default function App({ Component, pageProps }: any) {
  return (
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}
