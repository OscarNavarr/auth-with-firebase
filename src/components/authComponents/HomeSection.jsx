import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineUser } from "react-icons/ai";
import { logout } from "../../store/auth/authSlice"
import { useNavigate } from 'react-router-dom';

import { AiOutlinePlus } from "react-icons/ai";

export const HomeSection = () => {
  const { email, displayName, photoURL } = useSelector( state => state.auth );
  
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogout = () => {
    dispatch(logout());
    navigate('/authentication/login');
  }
  console.log(photoURL,email)
  return (
    <div className='h-screen flex justify-center items-center'>
    
      <div>
        <div className='mx-auto relative rounded-full w-[10rem] h-[10rem]'>
          {
            photoURL 
            ? <img src={photoURL} alt='logo' className='rounded-full w-[10rem] h-[10rem] bg-black'/>
            : <AiOutlineUser className='w-[10rem] h-[10rem] p-2 border-[0.1rem]  rounded-full'/>
          }
          {
            !photoURL && <button><AiOutlinePlus className='absolute right-0  outline outline-white outline-offset-2 outline-4  left-0 mx-auto bottom-[-1rem] z-50 bg-white h-9 w-9 rounded-full border-[0.1rem]'/></button>
          }
        </div>
        


        <div className='mx-auto mt-[5rem]'>
          <h1 className='text-[2rem] text-center'>Welcome {(displayName !== null) ? displayName : email }</h1>
          <div className='flex justify-center mt-10'>

            <button onClick={handleLogout} className='bg-[#5a6263]  hover:bg-[#484e4f] hover:cursor-pointer text-white text-[1.5rem] text-center py-1 rounded-[.8rem] w-[9rem] h-[3rem] '
            >
              Logout
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
