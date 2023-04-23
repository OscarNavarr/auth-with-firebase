// todo  mostrar el mensaje de la variable "errorMesssage"

import React, {useMemo, useState} from 'react'
import { motion } from 'framer-motion';
//IMPORT ICONS
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

//IMPORT REACT-ROUTER-DOM
import { Link, useNavigate } from 'react-router-dom';

//IMPORT BUTTONS IMAGES
import { searchButton } from '../assets/buttons_icons';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../store/auth/thunks';

export const Register = () => {

  const [visiblePswd, setVisiblePswd] = useState(false);

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirPswd, setConfirmPswd] = useState('');
  const [ errorPswd, setErrorPswd ] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // obtener los errores de firebase
  const{ status, errorMessage } = useSelector( state => state.auth); 

  //  saber si se esta checkendo el formulario
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  
  // FUNCTION FOR CHANGE EMAIL
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // FUNCTION FOR CHANGE PASSWORD
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  // FUNCTION FOR CONFIRM THE PASSWORD
  const handleConfirmPassword = (event) => {
    setConfirmPswd(event.target.value);
  };
  // FUNCTION FOR CREATE THE USER
  const onSubmit =async(e) => {
    e.preventDefault();
    setVisiblePswd(false);
    if(password === confirPswd){
      dispatch( startCreatingUserWithEmailPassword( {email, password} ) );

      if(errorMessage){
        navigate('/');
      };
    }else{
      setErrorPswd('The passwords are not the same');
    }

  }
  
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1,delay:0.3}}
    >
      <p className='text-[#5a6263] text-center mt-[2rem] text-[2rem]'>Sign Up</p>
      {
        errorMessage || errorPswd && (
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.7}}
            className='bg-red-400 min-h-[3rem] max-w-[15rem] rounded-lg mx-auto mt-5'
        >
            <p className='text-white text-[1.1rem] text-center'>{errorMessage ? errorMessage : errorPswd }</p>
        </motion.div>
      )}
      <form onSubmit={onSubmit}>
        <div className='flex justify-center mt-[5rem]'>
          <input
              type="email" 
              name='email' 
              onChange={handleEmailChange}
              placeholder='Write your email' 
              className='bg-transparent placeholder-black  w-[17rem] hover:text-center  outline-none border-[#5a6263] border-b-2'
          />
        </div>
        
        <div className='flex justify-center mt-[2rem]'>
          <input 
              type={`${visiblePswd ? 'text' : 'password'}`}  
              name='password' 
              onChange={handlePasswordChange}
              placeholder='Write your password' 
              className='bg-transparent placeholder-black w-[15rem] hover:text-center outline-none border-[#5a6263] border-b-2'
          />
          <span className=' border-[#5a6263] border-b-2'>
              {
                  visiblePswd ? 
                      <AiOutlineEye onClick={() => setVisiblePswd(!visiblePswd)} className='w-[2rem] h-[2rem] text-[#5a6263]'/> 
                  :
                      <AiOutlineEyeInvisible onClick={() => setVisiblePswd(!visiblePswd)} className='w-[2rem] h-[2rem] text-[#5a6263]'/> 
              }
              
          </span>
        </div>
        <div className='flex justify-center mt-[2rem]'>
          <input 
              type={`${visiblePswd ? 'text' : 'password'}`} 
              name="password"
              onChange={handleConfirmPassword} 
              placeholder='Confirm your password' 
              className='bg-transparent placeholder-black w-[15rem] hover:text-center outline-none border-[#5a6263] border-b-2'
          />
          <span className=' border-[#5a6263] border-b-2'>
              {
                  visiblePswd ? 
                      <AiOutlineEye onClick={() => setVisiblePswd(!visiblePswd)} className='w-[2rem] h-[2rem] text-[#5a6263]'/> 
                  :
                      <AiOutlineEyeInvisible onClick={() => setVisiblePswd(!visiblePswd)} className='w-[2rem] h-[2rem] text-[#5a6263]'/> 
              }
              
          </span>
        </div>

        <div className='flex justify-center mt-10'>
            <button disabled={isCheckingAuthentication} type="submit" className='bg-[#5a6263] hover:bg-[#484e4f] hover:cursor-pointer text-white text-[1.5rem] text-center py-1 rounded-[.8rem] w-[9rem] h-[3rem] '>
              Sign up
            </button>
        </div>
      </form>
      
      <div className='flex justify-center mt-5 mb-2'>
          <Link to={"/authentication/login"} className="mx-auto">Go to Sign in page</Link>
      </div>
    </motion.div>
  )
}
