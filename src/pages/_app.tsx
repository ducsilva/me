import NProgress from 'nprogress';
import { Router } from 'next/router';

import '../styles/globals.css';
import '../styles/Navbar.css';
import '../styles/Profile.css';
import '../styles/ProfileLoading.css';
import '../styles/Repositories.css';
import '../styles/Footer.css';
import '../styles/Search.css';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link rel="stylesheet" href="/nprogress.css" type="text/css" />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
