import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import { NextI18NextProvider } from 'next-i18next';
import { i18n } from '../next-i18next.config';

function MyApp({ Component, pageProps }) {
  return (
    <NextI18NextProvider
      // pass i18n instance to NextI18NextProvider
      i18n={i18n}
      // other NextI18NextProvider props if needed
    >
      <Component {...pageProps} />
    </NextI18NextProvider>
  );
}

export default appWithTranslation(MyApp);
