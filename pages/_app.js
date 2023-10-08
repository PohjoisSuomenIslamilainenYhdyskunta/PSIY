import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import { i18n } from '../next-i18next.config';

function MyApp({ Component, pageProps }) {
  return (
    <appWithTranslation i18n={i18n}>
      <Component {...pageProps} />
    </appWithTranslation>
  );
}

export default MyApp;