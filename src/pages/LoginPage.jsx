import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { motion } from "framer-motion"



export const LoginPage = () => {

   

  return (
    <div className='flex justify-center items-center relative h-screen w-screen imagen-bg'>
        
        <motion.div 
            initial={{y:'100%', opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:1.7}}
            className='glassmorphism w-[20rem] md:w-[30rem]  min-h-[25rem]'
        >
            <Outlet/>
        </motion.div>
        

    </div>
  )
}
