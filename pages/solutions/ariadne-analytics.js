import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'
import styles from '../../styles/Solutions.module.css'
import CheckIcon from '@mui/icons-material/Check';


const variants = {
  hidden:{opacity: 0, x:200, y:0},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:200,y:0}
}
const herovariants = {
  hidden:{opacity: 0, x:-200, y:0},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:0,y:-200}

}
const heroVvariants = {
  hidden:{opacity: 0, x:200, y:0},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:200,y:0}

}




const AriadneAnalytics = () => {
  return (
    <div>
      <Head>
        <title>Ariadne Analytics</title>
        <meta name="description" content="Ariadne Analytics" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/ariadneicon.png" />
       
      </Head>
      <motion.div exit={{opacity:0}}  className={styles.hero} >
          <div className={styles.heroContainer}>

            <div className = {styles.heroTextContainer}>
            <div className={styles.heroText}>
            <motion.h1 initial="hidden" animate="enter" exit="exit" variants={herovariants} transition={{duration: 0.5, type: 'spring', bounce: 0.3}} >Ariadne Analytics</motion.h1>
              <motion.p initial="hidden" animate="enter" exit="exit" variants={herovariants} transition={{duration: 0.2, type: 'easeInOut'}}>Discover the potential of Ariadne Analytics for your business. Get to know your customers and explore the value behind it.</motion.p>
              
            </div>
            </div>

            <div className={styles.heroScreen} >
            
            <motion.img
            alt="xa"
            initial="hidden" animate="enter" exit="exit" variants={heroVvariants} transition={{duration: 0.5, type: 'spring', bounce: 0.3 }} src = "/Photos/Pages/Analytics/Laptopwp.png" />
            </div>

          </div>
        </motion.div>

      <main>
        
      <div className={`${styles.gifbox}  bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#f9f9f9]  ` } >
            <div className = {styles.giftext}>
              
              <p>Ariadne Analytics provides essential KPIs such as:</p>

              <span><CheckIcon /></span>&nbsp; &nbsp; &nbsp;The number of people that passed by your store<br/>
              <span><CheckIcon /></span>&nbsp; &nbsp; &nbsp;The number of people that entered your store<br/>
              <span><CheckIcon /></span>&nbsp; &nbsp; &nbsp;The average time that people spend in your store<br/>
              <span><CheckIcon /></span>&nbsp; &nbsp; &nbsp;The popular transitions inside your store<br/>
            
            
            
            
            </div>
            <div className = {styles.gif}>
            <video  playsInline className='pointer-events-none' width="100%" src="/Videos/h1.mp4" autoPlay loop muted type = "videos/mp4"/>
            </div>
          </div>

      <div className={styles.sectionA1}>
          <h1>
          Real-Time Analytics
          </h1>
          <p>When do your consumers prefer to shop during the day, how many people are at any time in your store and which areas are they visiting?</p>
          <div className={styles.trioContainer} >
            <div className={styles.singleSnap}>
              <img className = "hover:scale-105 transition ease-in-out  " src="/Photos/Pages/Analytics/Total.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
              <img className = "hover:scale-105 transition ease-in-out  " src="/Photos/Pages/Analytics/Floor1.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
              <img className = "hover:scale-105 transition ease-in-out  " src="/Photos/Pages/Analytics/Floor2.png" alt="st"  />
            </div>
          </div>

         
         <img alt='xas' className = " transition ease-in-out w-full mt-2 "  src = "/Photos/Pages/Analytics/Daily.png"/>
         


      </div>
      <div className={styles.sectionA2}>
        <h1>Basic Analytics</h1>
          <p>Recognize the most visited areas of your store and tailor your services there to improve your customer&rsquo;s experience.</p>
          <div className={styles.trioContainer} >
            <div className={styles.singleSnap}>
              <img className = "hover:scale-105 transition ease-in-out  " src="/Photos/Pages/Analytics/BasicAnalytics/h1a.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
              <img className = "hover:scale-105 transition ease-in-out  " src="/Photos/Pages/Analytics/BasicAnalytics/h2.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
              <img className = "hover:scale-105 transition ease-in-out  "   src="/Photos/Pages/Analytics/BasicAnalytics/h3.png" alt="st" />
            </div>
          </div>
           

          <p>Understand what is interesting for your customers. Discover how much time your customers spend to each area in your store.</p>
          <div className={styles.trioContainer} >
            <div className={styles.singleSnap}>
              <img className = "hover:scale-105 transition ease-in-out  " src="/Photos/Pages/Analytics/BasicAnalytics/h4.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
              <img className = "hover:scale-105 transition ease-in-out  " src="/Photos/Pages/Analytics/BasicAnalytics/h5.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
              <img className = "hover:scale-105 transition ease-in-out  " src="/Photos/Pages/Analytics/BasicAnalytics/h6.png" alt="st" />
            </div>
          </div>
          <p>With Ariadne queue management system you are notified when the waiting times in your cashier zone are increased.</p>

          <div className={styles.trioContainer} >
            <div className={styles.singleSnap}>
              <img className = "hover:scale-105 transition ease-in-out  " src="/Photos/Pages/Analytics/BasicAnalytics/h7.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
              <img className = "hover:scale-105 transition ease-in-out  " src="/Photos/Pages/Analytics/BasicAnalytics/h8.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
              <img className = "hover:scale-105 transition ease-in-out  " src="/Photos/Pages/Analytics/BasicAnalytics/h9.png" alt="st" />
            </div>
          </div>
      </div>
      <div className={styles.sectionA3}>
        <h1>Advanced Analytics</h1>
        <p>Intuitive heat maps for your entire store will guide you to better manage your space, improving your staffing and product placement.</p>
        <div className={styles.duoContainer} >
            <div className={styles.singleSnap}>
              <img className = "hover:scale-105 transition ease-in-out  " src="/Photos/Pages/Analytics/AdvancedAnalytics/h10.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
            <img className = "hover:scale-105 transition ease-in-out  " src="/Photos/Pages/Analytics/AdvancedAnalytics/h11.png" alt="st" />
            </div>
            
          </div>
        <p>Ariadne will measure the utilization of every square meter of your store and will guide you to identify your anchor products.</p>

        <div className={styles.duoContainer} >
            <div className={styles.singleSnap}>
            <img className = "hover:scale-105 transition ease-in-out  " src="/Photos/Pages/Analytics/AdvancedAnalytics/h12.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
            <img className = "hover:scale-105 transition ease-in-out  " src="/Photos/Pages/Analytics/AdvancedAnalytics/h13.png" alt="st" />
            </div>
            
          </div>
        <p>Study your store&rsquo;s customer flow patterns and concentrate on them to improve your customers Journey and boost your profits.</p>

        <div className={`${styles.duoContainer}  mb-32 ` }>
            <div className={styles.singleSnap}>
            <img className = "hover:scale-105 transition ease-in-out  " src="/Photos/Pages/Analytics/AdvancedAnalytics/h14.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
            <img className = "hover:scale-105 transition ease-in-out  " src="/Photos/Pages/Analytics/AdvancedAnalytics/h15.png" alt="st" />
            </div>
            
          </div>

      </div>

      


      </main>
      <div className={styles.blackCTA}>
        <div className={styles.innerCTA}>
        <h1 className='text-center text-white' style={{fontWeight:"300"}} >Work together?</h1>
      <Link href ="/letstalk"><a><button className=' bg-white text-black hover:bg-slate-200 py-2 mt-8 px-3 text-lg mt-5'>Let&rsquo;s Talk</button></a></Link>
      </div>
        </div>
    </div>
  )
}

export default AriadneAnalytics