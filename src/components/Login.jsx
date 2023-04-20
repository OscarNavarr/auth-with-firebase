import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword, startTwitterSignIn } from '../store/auth/thunks';

//IMPORT ICONS
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

//IMPORT REACT-ROUTER-DOM
import { Link, useNavigate } from 'react-router-dom';

//IMPORT BUTTONS IMAGES
import { searchButton, twitterButton } from '../assets/buttons_icons';

//IMPORT MOTION
import {motion} from 'framer-motion';


export const Login = () => {
    
    //HOOK FOR VIEW PASSWORD BUTTON
    const [visiblePswd, setVisiblePswd] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();
    
    const dispatch = useDispatch();

    //Obtener el estatus y el error del login ..... esta informacion viene del authSlice
    const { status, errorMessage } = useSelector( state => state.auth );
    
    // saber el estado de la autenticacion checking, no autenticado 
    const isAuthenticating = useMemo( () => status === 'checking', [status]);
 
    // FUNCTION FOR CHANGE EMAIL
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // FUNCTION FOR CHANGE PASSWORD
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // FUNCTION TO MANAGE EMAIL AND PASSWORD
    const onSubmit = async(e) => {
        e.preventDefault();
        
        dispatch( startLoginWithEmailPassword({email, password}));

        if(errorMessage){alert(errorMessage)};

        navigate('/');
    }
    // SIGN IN WITH GOOGLE
    const onGoogleSignIn = () => {
        console.log('Google Sign In')
        
        dispatch(startGoogleSignIn());
        
    }
    
    // SIGN IN WITH LINKEDIN
    const onTwitterSignIn = () => {
        console.log('Twitter Sign In')
        dispatch(startTwitterSignIn());
    }
  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1,delay:0.3}}
    >
      <p className='text-[#5a6263] text-center mt-[2rem] text-[2rem]'>Sign In</p>
        <form onSubmit={onSubmit}>
            <div className='flex justify-center mt-[5rem]'>
                    <input 
                        type="email" 
                        value={email}
                        onChange={handleEmailChange }
                        name='email' 
                        placeholder='Write your email' 
                        className='bg-transparent placeholder-black w-[17rem] hover:text-center outline-none border-[#5a6263] border-b-2'
                    />
            </div>
            <div className='flex justify-center mt-[2rem]'>
                    <input 
                        type={`${visiblePswd ? 'text' : 'password'}`} 
                        name='password'
                        value={password} 
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

            <div className='flex justify-center mt-10 '>
                
                <div className='flex relative justify-center gradient-bg items-center w-[9.2rem] h-[3.2rem] rounded-[.8rem]'>
                    <button 
                        disabled={isAuthenticating}
                        type='submit' 
                        className='bg-[#5a6263]   hover:bg-[#484e4f] hover:cursor-pointer text-white text-[1.5rem] text-center py-1 rounded-[.8rem] w-[9rem] h-[3rem] '
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </form>
      <div className='flex justify-around px-4 md:px-[6.4rem] mt-4'>
          <div className=' border-[#5a6263] mb-[0.7rem] border-b-2 w-[5rem]'/>
          <div>
              <p className='pt-0'>or sign in with</p>
          </div>
          <span className=' border-[#5a6263] mb-[0.7rem] border-b-2 w-[5rem]'/>
      </div>

      <div className='flex justify-center mt-10'>
          <button disabled={isAuthenticating} onClick={onGoogleSignIn} className='border-[#5a6263] border-2 p-2 rounded-lg' >
              <img src={searchButton} alt='google logo' className='w-[2.5rem]  h-[2.5rem]'/>
          </button>
          <button disabled={isAuthenticating}  onClick={onTwitterSignIn} className='border-[#5a6263] border-2 p-2 ml-5 rounded-lg' >
              <img src={twitterButton} alt='google logo' className='w-[2.5rem] h-[2.5rem]'/>
          </button>
      </div>
      <div className='flex justify-center mt-5 mb-2'>
          <Link to={"/authentication/register"} className="mx-auto">Create an accound</Link>
      </div>

    </motion.div>
  )
}
