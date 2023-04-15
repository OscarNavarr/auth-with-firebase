import React, {useState} from 'react'
import { motion } from 'framer-motion';
//IMPORT ICONS
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

//IMPORT REACT-ROUTER-DOM
import { Link } from 'react-router-dom';

//IMPORT BUTTONS IMAGES
import { searchButton, twitterButton } from '../assets/buttons_icons';

export const Register = () => {

  const [visiblePswd, setVisiblePswd] = useState(false);

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1,delay:0.3}}
    >
      <p className='text-[#5a6263] text-center mt-[2rem] text-[2rem]'>Sign Up</p>

      <div className='flex justify-center mt-[5rem]'>
        <input
            type="email" 
            name='email' 
            placeholder='Write your email' 
            className='bg-transparent placeholder-black  w-[17rem] hover:text-center  outline-none border-[#5a6263] border-b-2'
        />
      </div>
      
      <div className='flex justify-center mt-[2rem]'>
        <input 
            type="password" 
            name='password' 
            placeholder='Write your password' 
            className='bg-transparent placeholder-black w-[15rem] hover:text-center outline-none border-[#5a6263] border-b-2'
        />
        <button className=' border-[#5a6263] border-b-2'>
            {
                visiblePswd ? 
                    <AiOutlineEye onClick={() => setVisiblePswd(!visiblePswd)} className='w-[2rem] h-[2rem] text-[#5a6263]'/> 
                :
                    <AiOutlineEyeInvisible onClick={() => setVisiblePswd(!visiblePswd)} className='w-[2rem] h-[2rem] text-[#5a6263]'/> 
            }
            
        </button>
      </div>
      <div className='flex justify-center mt-[2rem]'>
        <input 
            type="password" 
            name='password' 
            placeholder='Confirm your password' 
            className='bg-transparent placeholder-black w-[15rem] hover:text-center outline-none border-[#5a6263] border-b-2'
        />
        <button className=' border-[#5a6263] border-b-2'>
            {
                visiblePswd ? 
                    <AiOutlineEye onClick={() => setVisiblePswd(!visiblePswd)} className='w-[2rem] h-[2rem] text-[#5a6263]'/> 
                :
                    <AiOutlineEyeInvisible onClick={() => setVisiblePswd(!visiblePswd)} className='w-[2rem] h-[2rem] text-[#5a6263]'/> 
            }
            
        </button>
      </div>

      <div className='flex justify-center mt-10'>
          <button className='bg-[#5a6263] hover:bg-[#484e4f] hover:cursor-pointer text-white text-[1.5rem] text-center py-1 rounded-[.8rem] w-[9rem] h-[3rem] '>
            Sign up
          </button>
      </div>

      <div className='flex justify-around px-4 md:px-[6.4rem] mt-4'>
          <div className=' border-[#5a6263] mb-[0.7rem] border-b-2 w-[5rem]'/>
          <div>
              <p className='pt-0'>or sign up with</p>
          </div>
          <span className=' border-[#5a6263] mb-[0.7rem] border-b-2 w-[5rem]'/>
      </div>

      <div className='flex justify-center mt-10'>
          <button className='border-[#5a6263] border-2 p-2 rounded-lg' >
              <img src={searchButton} alt='google logo' className='w-[2.5rem]  h-[2.5rem]'/>
          </button>
          <button className='border-[#5a6263] border-2 p-2 ml-5 rounded-lg' >
              <img src={twitterButton} alt='google logo' className='w-[2.5rem] h-[2.5rem]'/>
          </button>
      </div>
      <div className='flex justify-center mt-5 mb-2'>
          <Link to={"/"} className="mx-auto">Go to Sign in page</Link>
      </div>
    </motion.div>
  )
}
