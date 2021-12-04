import { motion } from 'framer-motion'
import React from 'react'
import { fadeInUp, routeAnimation, stagger } from '../animations'
import ServiceCard from '../components/ServiceCard'
import StageCard from '../components/StageCard'
import {services, stages} from '../data'

const Parcours = () => {
  return (
    <motion.div className="flex flex-col flex-grow px-6 pt-1 overflow-y-scroll" style={{height: '65vh'}} variants={routeAnimation} initial="initial" animate="animate">  
      <h1 className="text-2xl font-bold text-center text-x4">Mon parcours</h1>
      <hr />
      <div className="flex-grow p-4 my-5 bg-gradient-to-b from-yellow-500 via-transparent to-red-400 dark:from-dark-500 dark:to-dark-700" style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h6 className="my-3 font-bold tracking-wide text-x1">Formation</h6>
        <motion.div className="grid gap-6 lg:grid-cols-2" variants={stagger} initial="initial" animate="animate">
          {
            services.map(service => (
                <motion.div className="col-span-2 p-4 overflow-y-scroll bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1" key={service.title} variants={fadeInUp} style={{height:'10rem'}}>
                   <ServiceCard service={service} />
                </motion.div>
              )
            ) 
          }
        </motion.div>
        <h6 className="my-3 font-bold tracking-wide text-x1">Stage</h6>
        <motion.div className="grid gap-6 lg:grid-cols-2" variants={stagger} initial="initial" animate="animate">
          {
            stages.map(stage => (
                <motion.div className="col-span-2 p-2 overflow-y-scroll bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1" key={stage.title} variants={fadeInUp} style={{height:'10rem'}}>
                   <StageCard stage={stage} />
                </motion.div>
              )
            ) 
          }
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Parcours
