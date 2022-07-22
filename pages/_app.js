import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import {AnimatePresence} from "framer-motion"
// import { useEffect } from 'react';
// import TagManager from 'react-gtm-module';
import { appWithTranslation } from 'next-i18next';
import Script from 'next/script'

 

function MyApp({ Component, pageProps }) {

  // useEffect(() => {
  //   TagManager.initialize({ gtmId: 'GTM-TLNNDCF' });
  // }, []);

  return(
   
     <>
    

<Layout>
    <AnimatePresence initial={true} exitBeforeEnter> 
      
      <Component {...pageProps} />
    
    </AnimatePresence>
    </Layout>

    <Script strategy="lazyOnload" src = {`https://www.googletagmanager.com/gtag/js?id=UA-196200544-1`} />

    <Script strategy="lazyOnload"  id="Google Tag Manager">
      {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-196200544-1');`}
    </Script>   
     </>
   
   ) 
}

 
export default appWithTranslation(MyApp);
