import React from 'react'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

import {ThemeProvider} from 'next-themes'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48">
        
        <div className="col-span-12 p-4 text-base text-center bg-white pt-14 sm:h-1/4 md:h-full xl:h-1/4 lg:h-1/4 dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">  
          <Sidebar />
        </div>
        
        <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark lg:col-span-9 dark:bg-dark-500 rounded-2xl">
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
          
        </div>
      </div>
      <br /><br />
    </ThemeProvider>
  )
}

export default MyApp

