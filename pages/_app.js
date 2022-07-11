import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import {AnimatePresence} from "framer-motion"
// import { useEffect } from 'react';
// import TagManager from 'react-gtm-module';

import Script from 'next/script'

 

function MyApp({ Component, pageProps }) {

  // useEffect(() => {
  //   TagManager.initialize({ gtmId: 'GTM-TLNNDCF' });
  // }, []);

  return(
   
     <>
    <Script strategy="afterInteractive" src = {`https://www.googletagmanager.com/gtag/js?id=GTM-TLNNDCF`} />

    <Script strategy="afterInteractive"  id="Google Tag Manager">
      {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'GTM-TLNNDCF');`}
    </Script>   

<Layout>
    <AnimatePresence initial={true} exitBeforeEnter> 
      
      <Component {...pageProps} />
    
    </AnimatePresence>
    </Layout>
     </>
   
   ) 
}

export default MyApp
