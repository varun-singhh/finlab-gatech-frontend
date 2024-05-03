import { ReactElement, ReactNode, useEffect } from "react";
import ProgressBar from "@badrap/bar-of-progress";
import type { NextPage } from "next";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { baselightTheme } from "../../gatech/src/components/theme/DefaultTheme";
import { Router } from "next/dist/client/router";
import { StyledEngineProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "../store";

const progress = new ProgressBar({
  size: 4,
  color: "#0384fc",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

const App = (props: MyAppProps) => {
  const { Component, pageProps } = props;
  const theme = baselightTheme;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <StyledEngineProvider injectFirst>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Fintech Lab | GA Tech</title>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider store={store}>
          {getLayout(<Component {...pageProps} />)}
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
