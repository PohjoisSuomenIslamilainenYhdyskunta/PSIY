import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import ContentSection from '../components/ContentSection'
import DonationSection from '../components/DonationSection'
import GoogleAnalytics from '../components/GoogleAnalytics'
import HeroBanner from '../components/HeroBanner'
import MosqueBrandingCSS from '../components/MoqueBrandingCSS'
import PrayerTimes from '../components/PrayerTimes'
import Gallery from '../components/Gallery'
import Team from '../components/Team'
import mosques from '../data/mosques.yml'
import mosques_fi from '../data/mosques_fi.yml'
import urlModule from 'url'

import { useState, useEffect } from 'react';
import { withRouter } from 'next/router';

/*function Home({ data }) {
  const [language, setLanguage] = useState('EN'); // Default language is set to English (EN)

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };*/
  function Home({ data, router }) {
    const [language, setLanguage] = useState('FI'); // Default language is set to English (EN)

    //const router = useRouter();

    useEffect(() => {
      // Extract the language from the URL hash
      const hashLanguage = window.location.hash.slice(1);
      if (hashLanguage === 'EN') {
        setLanguage('EN');
      } else {
        setLanguage('FI');
      }
    }, []);
  
    const handleLanguageChange = (lang) => {
      setLanguage(lang);
  
      // Update the URL hash based on the selected language
      window.location.hash = lang;
      router.reload(); // Reload the page to reflect the language change
    };
  
    // Select the appropriate data object based on the selected language
    const selectedData = language === 'EN' ? mosques[data.hash] : mosques_fi[data.hash];

    //console.log(data);
    console.log(language)
    

  return (
    <>
      <Head>
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" 
         integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
        <title>{data.name} - Mosque Website</title>
        <GoogleAnalytics />
      </Head>
      <MosqueBrandingCSS data={data} />
      <button onClick={() => handleLanguageChange('EN')}>English</button> &nbsp; 
      <button onClick={() => handleLanguageChange('FI')}>Finnish</button>
      <HeroBanner data={data} />
      <PrayerTimes data={data} />
      <About data={data} />
      <ContentSection data={data} />
      <Gallery data={data} />
      <DonationSection data={data} />
      <Team data={data} />
      <Contact data={data} />
    </>
  )
}

Home.getInitialProps = async ({ req }) => {

  const urlString = req && req.headers && req.headers.host ? `http://${req.headers.host}${req.url}` : '';
  console.log('Website URL:', urlString);
  const parsedUrl = urlModule.parse(urlString);
  const hash = parsedUrl.hash;
  console.log(req.hashLanguage)

  const data = mosques_fi[ req.headers.host ] ?? mosques_fi[ "default" ]
  //const data = selectedData
  return { data: data }
};


//export default Home
export default withRouter(Home);