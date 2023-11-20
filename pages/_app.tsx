import "@/styles/reset.scss";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Head from "next/head";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="height=device-height,width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <GoogleAnalytics GA_MEASUREMENT_ID={"G-E4H3JCJ3C8"} />
      <Component {...pageProps} />
    </>
  );
}
