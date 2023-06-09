import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next'; // Import react-i18next for language translation

import About from '../components/About';
import Contact from '../components/Contact';
import ContentSection from '../components/ContentSection';
import DonationSection from '../components/DonationSection';
import GoogleAnalytics from '../components/GoogleAnalytics';
import HeroBanner from '../components/HeroBanner';
import MosqueBrandingCSS from '../components/MoqueBrandingCSS';
import PrayerTimes from '../components/PrayerTimes';
import Gallery from '../components/Gallery';
import Team from '../components/Team';
import mosques from '../data/mosques.yml';
import mosques_fi from '../data/mosques_fi.yml';
import urlModule from 'url';

function Home({ data }) {
  const router = useRouter();
  const { t, i18n } = useTranslation(); // Initialize react-i18next hooks

  useEffect(() => {
    // Extract the language from the URL hash
    const hashLanguage = window.location.hash.slice(1);
    if (hashLanguage === 'en') {
      i18n.changeLanguage('en'); // Update the language using i18next
    } else {
      i18n.changeLanguage('fi');
    }
  }, []);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Update the language using i18next
    // Update the URL hash based on the selected language
    window.location.hash = lang;
    router.reload(); // Reload the page to reflect the language change
  };

  // Select the appropriate data object based on the selected language
  const selectedData = i18n.language === 'en' ? mosques[data.hash] : mosques_fi[data.hash];

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        ></link>
        <title>{data.name} - Mosque Website</title>
        <GoogleAnalytics />
      </Head>
      <MosqueBrandingCSS data={data} />
      <button onClick={() => handleLanguageChange('en')}>{t('english')}</button> &nbsp;
      <button onClick={() => handleLanguageChange('fi')}>{t('finnish')}</button>
      <HeroBanner data={selectedData} />
      <PrayerTimes data={selectedData} />
      <About data={selectedData} />
      <ContentSection data={selectedData} />
      <Gallery data={selectedData} />
      <DonationSection data={selectedData} />
      <Team data={selectedData} />
      <Contact data={selectedData} />
    </>
  );
}

Home.getInitialProps = async ({ req }) => {
  const urlString = req && req.headers && req.headers.host ? `http://${req.headers.host}${req.url}` : '';
  console.log('Website URL:', urlString);
  const parsedUrl = urlModule.parse(urlString);
  const hash = parsedUrl.hash;
  console.log(req.hashLanguage);

  const data = mosques_fi[req.headers.host] ?? mosques_fi['default'];
  return { data: data };
};

export default Home;