import Head from "@Components/Head";
import "@Styles/styles.scss";
import { Router } from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
