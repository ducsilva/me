import Head from "@Components/Head";
import { store } from "@States/store";
import "@Styles/styles.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Router } from "next/router";
import NProgress from "nprogress";
import { Provider } from "react-redux";

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
    <Provider store={store}>
      <Head />

      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
