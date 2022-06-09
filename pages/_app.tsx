import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import "../styles/globals.css";

type NextPageLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsLayout = AppProps & {
  Component: NextPageLayout;
};

function MyApp({ Component, pageProps }: AppPropsLayout) {
  // return <Component {...pageProps} />
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
