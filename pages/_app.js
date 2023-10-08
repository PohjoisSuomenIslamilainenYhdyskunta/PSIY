import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import { I18nextProvider } from 'react-i18next';
import { i18n } from '../next-i18next.config';

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider
      // pass i18n instance to NextI18NextProvider
      i18n={i18n}
      // other NextI18NextProvider props if needed
    >
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default appWithTranslation(MyApp);