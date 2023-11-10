import '../styles/globals.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';

import seo from '../seo.config';

import Navbar from '../components/Header/Navbar';
import Footer from '../components/Header/Footer';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return <>
  <DefaultSeo {...seo} />
    <Navbar />
    <div className='flex flex-col items-center px-3'>
      <Component {...pageProps} />
    </div>
    <Footer />
  </>
}
