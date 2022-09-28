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

function Home({ data }) {
  return (
    <>
      <Head>
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" 
         integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
        <title>{data.name} - Mosque Website</title>
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
    </>
  )
}

Home.getInitialProps = async ({ req }) => {
  const data = mosques[ req.headers.host ] ?? mosques[ "default" ]
  return { data: data }
}

export default Home
