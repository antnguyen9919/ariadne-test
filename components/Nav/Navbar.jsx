import React,{useRef} from 'react'
import Link from 'next/link' 
import {Popover,Transition} from '@headlessui/react'
import { CircleFlag } from 'react-circle-flags'
// import { i18n } from 'next-i18next'
import { useRouter } from "next/router";
import {DiGoogleAnalytics} from 'react-icons/di'
import {BiNavigation,BiNotification,BiUser} from 'react-icons/bi'
 
// import {FaUserCircle} from 'react-icons/fa'

import {MdLocalAirport,MdStoreMallDirectory,
  MdEmojiTransportation,MdLocationCity,MdRoomService, MdMenu} from 'react-icons/md'
import {AiOutlineShopping} from 'react-icons/ai'

// import { useTranslation } from 'next-i18next';
import { useEffect,useState } from 'react'









const  Navbar = () => {
  let solutionRef = useRef(null)
  let industriesRef = useRef(null)
  let companyRef = useRef(null)
  let langRef = useRef(null)
  

  const { locale, locales, defaultLocale, asPath } = useRouter();

  const translations = {
  en:{"company":"Company","company_a":"About Us","company_b":"Blog","company_c":"Careers","company_d":"Contact","industries":"Industries","industries_a":"Retail stores","industries_b":"Shopping centres","industries_c":"Airports","industries_d":"Transportation","industries_e":"Cities","industries_f":"Hospitality","solutions":"Solutions","solutions_a":"Ariadne Analytics","solutions_b":"Ariadne Navigation","solutions_c":"Ariadne Engagement","talk":"Let's talk","whyariadne":"Why Ariadne"},
  de:{
    "company":"Unternehmen",
    "company_a":"Über uns",
    "company_b":"Blog",
    "company_c":"Karriere",
    "company_d":"Kontakt",
    "industries":"Branchen",
    "industries_a":"Einzelhandel",
    "industries_b":"Einkaufszentren",
    "industries_c":"Flughäfen",
    "industries_d":"Transport",
    "industries_e":"Städte",
    "industries_f":"Gastronomie",
    "solutions":"Lösungen",
    "solutions_a":"Ariadne Analytics",
    "solutions_b":"Ariadne-Navigation",
    "solutions_c":"Ariadne-Engagement",
    "talk":"Mehr erfahren",
    "whyariadne":"Warum Ariadne"},
  fr:{"company":"Compagnie","company_a":"À propos de nous","company_b":"Blog","company_c":"Carrières","company_d":"Contact","industries":"les industries","industries_a":"Les magasins de détail","industries_b":"Centres commerciaux","industries_c":"Aéroports","industries_d":"Transport","industries_e":"Villes","industries_f":"Hospitalité","solutions":"Solutions","solutions_a":"Ariane Analytics","solutions_b":"Navigation d'Ariane","solutions_c":"Fiançailles d'Ariane","talk":"Parlons","whyariadne":"Pourquoi Ariane"}
}

const [language,setLanguage]=useState({})

  useEffect(()=>{
    console.log(locale)
    if(locale==='de') {
      console.log('locale is german')
      setLanguage(translations.de)  
    } 
      else if(locale==='en'){
        console.log('locale is uk')
        setLanguage(translations.en) 
        // console.log("object: ",language)
      } else {
        console.log('locale is french')
        setLanguage(translations.fr)  
        // console.log("object: ",language)
      }

     
  },[])

  const solutions=[
    {title:`${language.solutions_a}`,icon:DiGoogleAnalytics,href:"/solutions/ariadne-analytics"},
  {title:`${language.solutions_b}`,icon:BiNavigation, href:"/solutions/ariadne-navigation"},
    {title:`${language.solutions_c}`,icon:BiNotification, href:"/solutions/ariadne-engagement"},
    
  ]
  const industries=[
    {title:`${language.industries_a}`,icon:MdStoreMallDirectory, href:"/industries/retail-stores"},
    {title:`${language.industries_b}`,icon:AiOutlineShopping, href:"/industries/shopping-centers"},
    {title:`${language.industries_c}`,icon:MdLocalAirport, href:"/industries/airports"},
    {title:`${language.industries_d}`,icon:MdEmojiTransportation, href:"/industries/transportation"},
    {title:`${language.industries_e}`,icon:MdLocationCity, href:"/industries/cities"},
    {title:`${language.industries_f}`,icon:MdRoomService, href:"/industries/hospitality"},
    
  ]
  const company=[
    {title:`${language.company_a}`,href:"/company/about-us"},
    {title:`${language.company_b}`,href:"/blog"},
    {title:`${language.company_c}`,href:"/company/careers"},
    {title:`${language.company_d}`,href:"/company/contact"},
    
    
  ]

    
  
  return (

    <div  >
      <Popover className='fixed top-0 w-full bg-black z-50' >
      
      <div className="2xl:max-w-7xl max-w-4xl  px-4 mx-auto md:px-6">
      
          <div className="flex items-center justify-between h-16 2xl:h-20">

          <Link href="/" ><a className="flex items-center">
        <img src="/Photos/Asset16.png" className="mr-3 h-6 scale-125 sm:h-9 2xl:scale-150" alt="Ariadne Logo" /></a></Link>
            <div className='-my-2 -mr-2 md:hidden'>
              
          <Popover.Button className="inline-flex items-center justify-center text-gray-400 
          bg-white opacity-95 rounded-sm p-2
          "  >
          <span className='sr-only'>Open Menu</span>
            <MdMenu className='w-6 h-6' aria-hidden="true"   />
          </Popover.Button>

        
          
     

            </div>
            

            <div className={(locale==='de'||locale==='fr')?'hidden min-w-3/4 md:flex md:w-3/4 xl:w-7/12':'hidden min-w-3/4 md:flex md:w-3/4 xl:w-2/4'}>
              
            <Popover.Group as='nav' className='flex w-full justify-evenly ' >
             

              <Popover>
               {({open,close})=>(
                 <>
                 <Popover.Button 
                 ref={solutionRef}
                 onMouseEnter={()=>solutionRef.current.click()}
                 className='inline-flex items-center text-base font-medium rounded-ms  focus:outline-none'
                 >
                   <span className='text-white font-light text-lg 2xl:text-2xl  hover:text-red-600 transition ease-in'>{language.solutions}</span>

                 </Popover.Button>

                 <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
                <Popover.Panel onMouseLeave={close}
                              className='absolute z-10 w-screen max-w-xs px-2 mt-6 -ml-4  transform sm:px-0 lg:ml-0 lg:-translate-x-1/2'
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5  ">
                    <div className='relative grid gap-6 px-5 py-6 bg-white opacity-95 sm:gap-8 sm:p-8'>
                      {solutions.map((solution,index)=>(
                        <Link key = {index} href = {solution.href}><a className='flex items-start 
                        p-2 -m-3 rounded-lg text-gray-500 hover:text-black transition ease-in-out '><solution.icon className='w-6 h-6 text-slate-500 '/>
                        <div className='ml-4 '>
                          <p className='text-md font-semibold'>{solution.title}</p>
                          <p className='text-base  font-medium'>{solution.descriptions}</p>
                        </div></a>

                          
                        </Link>
                      ))}
                    </div>
                  </div>

                </Popover.Panel>
                    </Transition>


                 </>
               )}
              </Popover>

              <Popover>
               {({open,close})=>(
                 <>
                 <Popover.Button 
                 ref={industriesRef}
                 onMouseEnter={()=>industriesRef.current.click()}
                 className='inline-flex items-center text-base font-medium rounded-ms  focus:outline-none'
                 >
                   <span className='text-white font-light text-lg 2xl:text-2xl hover:text-red-600 transition ease-in'>{language.industries}</span>

                 </Popover.Button>
                 <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
                <Popover.Panel onMouseLeave={close}
                              className='absolute z-10 w-screen max-w-xs px-2 mt-6 -ml-4  transform sm:px-0 lg:ml-0 lg:-translate-x-1/2'
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5  ">
                    <div className='relative grid gap-6 px-5 py-6 bg-white opacity-95 sm:gap-8 sm:p-8 '>
                      {industries.map((solution,index)=>(
                        <Link key = {index} href = {solution.href}  ><a className='flex items-start 
                        p-2 -m-3 rounded-lg text-gray-500 hover:text-black transition ease-in-out  '>
<solution.icon className='w-6 h-6 text-slate-500'/>
                          <div className='ml-4 '>
                            <p className='text-md  font-semibold'>{solution.title}</p>
                            <p className='text-base  font-medium'>{solution.descriptions}</p>
                          </div>
                        </a>
                          
                        </Link>
                      ))}
                    </div>
                  </div>

                </Popover.Panel>
                    </Transition>


                 </>
               )}
              </Popover>

              <Link href='/why-ariadne'><a className='text-lg 2xl:text-2xl font-light  text-white hover:text-red-600 transition ease-in'>Why Ariadne</a></Link>

              <Popover>
               {({open,close})=>(
                 <>
                 <Popover.Button 
                 ref={companyRef}
                 onMouseEnter={()=>companyRef.current.click()}
                 className='inline-flex items-center text-base font-medium rounded-ms  focus:outline-none '
                 >
                   <span className='text-white font-light text-lg 2xl:text-2xl hover:text-red-600 transition ease-in '>{language.company}</span>

                 </Popover.Button>
                 <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
                <Popover.Panel onMouseLeave={close}
                              className='absolute z-10 w-screen max-w-xs px-2 mt-6 -ml-4  transform sm:px-0 lg:ml-0 lg:-translate-x-1/2'
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5  ">
                    <div className='relative grid gap-6 px-5 py-6 bg-white opacity-95 sm:gap-8 sm:p-8 '>

                      {company.map((comp,index)=>(
                        <Link key = {index} href = {comp.href} ><a className='flex items-start 
                        p-2 -m-3 rounded-lg text-gray-500 hover:text-black transition ease-in-out '>
<div className='ml-4 '>
                            <p className='text-md  font-semibold'>{comp.title}</p>
                            
                          </div>
                        </a></Link>
                      ))}
                    </div>
                  </div>

                </Popover.Panel>
                    </Transition>


                 </>
               )}
              </Popover>


            </Popover.Group>

            </div>

            
            
            <div className='items-center justify-end hidden md:flex'>
            <Link href ="/letstalk"><a><button className='bg-red-600 hover:bg-red-700 py-1 px-3 2xl:text-lg text-white'  >{language.talk}</button></a></Link>
            {/* <Link href={!user? '/login':'/dashboard'}></Link> */}
            {/* <a className=' text-base 2xl:text-2xl' href ='https://app.seulet.com' >
            <FaUserCircle className=' w-6 h-5 2xl:h-9 ml-7 text-white transition ease-in hover:scale-110' />
            <CircleFlag countryCode="de" className=' w-8 h-full 2xl:h-9 ml-7 transition ease-in hover:scale-110' />
            </a> */}

            <Popover>
               {({open,close})=>(
                 <>
                 <Popover.Button 
                 ref={langRef}
                 onMouseEnter={()=>langRef.current.click()}
                 className='inline-flex items-center text-base font-medium rounded-ms  focus:outline-none '
                 >
                   <span><CircleFlag countryCode={(locale==="de"||locale==="fr")? locale: "gb"  } className=' w-8 h-full   ml-7 transition ease-in hover:scale-110' /></span>

                 </Popover.Button>
                 <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
                <Popover.Panel onMouseLeave={close}
                              className='absolute z-10 w-screen max-w-xs px-2 mt-6 -ml-4  transform sm:px-0 lg:ml-0 lg:-translate-x-1/2'
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5  ">
                    <div className='relative grid gap-6 px-5 py-6 bg-white opacity-95 sm:gap-8 sm:p-8'>
                    
                    {locale!=='en' && <Link href={asPath} locale="en"><a className='flex items-center cursor-pointer transition ease-in hover:scale-110'>
                    <span><CircleFlag countryCode="gb" className=' w-8 h-full 2xl:h-9 ml-7 ' /> </span>
                    <span><h1 className=' w-8 h-full 2xl:h-9 ml-7'>English</h1> </span>
                    
                    </a></Link>}

                  {locale!=='de' &&  <Link href={asPath} locale="de"><a className='flex items-center cursor-pointer transition ease-in hover:scale-110'>
                    <span><CircleFlag countryCode="de" className=' w-8 h-full 2xl:h-9 ml-7 ' /> </span>
                    <span><h1 className=' w-8 h-full 2xl:h-9 ml-7'>German</h1> </span>
                    
                    </a></Link>}

                    {locale!=='fr'&& <Link href={asPath} locale="fr"><a className='flex items-center cursor-pointer transition ease-in hover:scale-110'>
                    <span><CircleFlag countryCode="fr" className=' w-8 h-full 2xl:h-9 ml-7 ' /> </span>
                    <span><h1 className=' w-8 h-full 2xl:h-9 ml-7'>French</h1> </span>
                    
                    </a></Link>}
                    
                    
                    </div>
                  </div>

                </Popover.Panel>
                    </Transition>


                 </>
               )}
              </Popover>
            
            </div>
            

          </div>
          
        </div>
        
        <div className='md:hidden '>
        {/* <h1 className='text-white'>sas</h1> */}
        <Popover.Panel className="absolute z-10 bg-black w-full text-white">
                            <h1 className='text-center'>{language.solutions}</h1>
                            <div className='relative grid grid-cols-2 gap-6 px-5 py-6 sm:gap-8 sm:p-8'>
                      {solutions.map((solution,index)=>(
                        <a key = {index} href = {solution.href} className='flex items-start 
                        p-2 -m-3 rounded-lg text-white' >
                         <solution.icon className='w-6 h-6 text-slate-500 '/>
                          <div className='ml-3 '>
                            <p className='text-sm font-normal'>{solution.title}</p>
                            
                          </div>
                        </a>
                      ))}
                    </div>
                    
                    <h1 className='text-center'>{language.industries}</h1>
                            <div className='relative grid grid-cols-2 gap-6 px-5 py-6 sm:gap-8 sm:p-8'>

                      {industries.map((solution,index)=>(
                        <a key = {index} href = {solution.href} className='flex items-start 
                        p-2 -m-3 rounded-lg text-white active:text-amber-200' >
                          <solution.icon className='w-6 h-6 text-slate-500 '/>
                          <div className='ml-3 '>
                            <p className='text-sm  font-normal'>{solution.title}</p>
                          
                          </div>
                        </a>
                      ))}
                    </div>

                    <h1 className='text-center'>{language.company}</h1>
                            <div className='relative grid grid-cols-2 gap-6 px-5 py-6 sm:gap-8 sm:p-8'>
                                  <a href='#' className='text-sm p-2 -m-3 text-lg font-light text-white' >{language.whyariadne}?</a>
                            {company.map((comp,index)=>(
                        <a key = {index} href = {comp.href} className='flex items-start 
                        p-2 -m-3 rounded-lg text-white ' >
                          
                          <div className='ml-1 '>
                            <p className='text-sm  font-normal'>{comp.title}</p>
                          
                          </div>
                        </a>
                      ))}
                    </div>

                    
                              <div className='flex w-full justify-center mb-3'>
                              <span><Link href={asPath} locale="en"><CircleFlag countryCode="gb" 
                              className ={(locale==='en')?` w-8 h-full 2xl:h-9 ml-7 brightness-110 border-2 rounded-full border-emerald-600`:` w-8 h-full 2xl:h-9 ml-7 brightness-50`} /></Link> </span>
                              <span><Link href={asPath} locale="de"><CircleFlag countryCode="de" className ={(locale==='de')?` w-8 h-full 2xl:h-9 ml-7 brightness-110 border-2 rounded-full border-solid border-emerald-600`:` w-8 h-full 2xl:h-9 ml-7 brightness-50`} /></Link> </span>
                              <span><Link href={asPath} locale="fr"><CircleFlag countryCode="fr" className ={(locale==='fr')?` w-8 h-full 2xl:h-9 ml-7 brightness-110 border-2 rounded-full border-emerald-600`:` w-8 h-full 2xl:h-9 ml-7 brightness-50`} /></Link> </span>

                              </div>

        
      </Popover.Panel>
            </div>

            
      
        
    </Popover>
    </div>
  )
}

export default Navbar