import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import ContentSection from '../components/ContentSection'
import DonationSection from '../components/DonationSection'
import GoogleAnalytics from '../components/GoogleAnalytics'
import HeroBanner from '../components/HeroBanner'
import MosqueBrandingCSS from '../components/MosqueBrandingCSS'
import PrayerTimes from '../components/PrayerTimes'
import Gallery from '../components/Gallery'
import Team from '../components/Team'
import ContactForm from '../components/ContactForm'
import mosques from '../data/mosques.yml'

function Home({ data }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/imgs/PSIY-circular.png"></link>

        {/* SEO Meta Tags */}
        <meta name="description" content="Welcome to the official website of Pohjois Suomen Islamilainen Yhdyskunta (PSIY), the Islamic Society of Northern Finland. Find information about the local Oulu masjid, our activities, events, and community services." />
        <meta name="keywords" content="Pohjois Suomen Islamilainen Yhdyskunta, PSIY, Islamic Society of Northern Finland, Oulu mosque, Oulun moskeija, Suomen moskeija, Finland mosque, Islamic community Oulu, Islamic events Oulu, Islamic services Finland" />
        <meta name="author" content="Pohjois Suomen Islamilainen Yhdyskunta" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Pohjois Suomen Islamilainen Yhdyskunta (PSIY) - Masjid Website" />
        <meta property="og:description" content="Welcome to the official website of Pohjois Suomen Islamilainen Yhdyskunta (PSIY), the Islamic Society of Northern Finland. Find information about our activities, events, and community services." />
        <meta property="og:image" content="/imgs/PSIY-circular.png" />
        <meta property="og:url" content="https://psiy.fi" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pohjois Suomen Islamilainen Yhdyskunta (PSIY) - Masjid Website" />
        <meta name="twitter:description" content="Welcome to the official website of Pohjois Suomen Islamilainen Yhdyskunta (PSIY), the Islamic Society of Northern Finland. Find information about our activities, events, and community services." />
        <meta name="twitter:image" content="/imgs/PSIY-circular.png" />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://psiy.fi" />

        {/* Language Tag */}
        <meta httpEquiv="Content-Language" content="en" />

        {/* Preload Important Resources */}
        <link rel="preload" href="/_next/static/css/23676ba13117b421.css" as="style" />
        <link rel="preload" href="/_next/static/css/703b48b595b9bf2c.css" as="style" />
        <link rel="stylesheet" href="/_next/static/css/23676ba13117b421.css" data-n-g="" />
        <link rel="stylesheet" href="/_next/static/css/703b48b595b9bf2c.css" data-n-p="" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
        <title>{data.name} - Oulu Masjid</title>
        <GoogleAnalytics />
      </Head>
      <MosqueBrandingCSS data={data} />
      <HeroBanner data={data} />
      <PrayerTimes data={data} />
      <About data={data} />
      <ContentSection data={data} />
      <Gallery data={data} />
      <DonationSection data={data} />
      <Team data={data} />
      <Contact data={data} />
      <ContactForm />
    </>
  )
}

Home.getInitialProps = async ({ req }) => {
  const data = mosques[req.headers.host] ?? mosques["default"]
  return { data: data }
}

export default Home
