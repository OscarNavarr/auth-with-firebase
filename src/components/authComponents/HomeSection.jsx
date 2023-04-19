import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const HomeSection = (props) => {
  const [user, setUser] = useState('');
  useEffect(() => {
    const {userAuth} = useParams();
    setUser(userAuth);
   
  }, [])
  
  return (
    <div>Home section {user}</div>
  )
}
