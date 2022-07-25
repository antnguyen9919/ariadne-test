import React, { useState, useMemo } from 'react'
import Head from 'next/head'


import styles from '../../styles/Industries.module.css'
import {ParallaxProvider} from 'react-scroll-parallax'
import Parallaximg from '../../components/Parallaximg';
import ContactForm from '../../components/ContactForm'




const contact = () => {



  return (
    <> <Head>
    <title>Contact</title>
    <meta name="description" content="Ariadne Maps GmbH" />
    <link rel="icon" href="/ariadneicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    
   
  </Head>
  <ParallaxProvider>
       <Parallaximg imgsrc="/Photos/Pages/Contact.jpg" height="80vh" opacity=".5" >
       <div className={styles.banner}>
                   
       <h1 className="text-left">Contact Us</h1>
            
               </div>
 
       </Parallaximg>
 
    </ParallaxProvider>
    
    <div className={styles.contactRow}>
    <div className={styles.contactColumn}>
              <h3 className='mb-6'>Contact Us</h3>
              <h4 className='mb-2'>Ariadne Maps GmbH</h4>
              <p className='mb-24'>
              Brecherspitzstraße 8<br/>

81541 München<br/>

+49 174 4079675 <br/>

contact@ariadnemaps.com 
              </p>

              </div>

            <div className={styles.contactColumn}>

              <ContactForm />

            </div>


    </div></>
   
  )
}

export default contact

