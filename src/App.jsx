import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { LoginPage} from './pages/index';
import { HomeSection, Login, Register } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from './firebase/config';
import { login, logout } from './store/auth/authSlice';
import { PrivateRoutes } from './utils/PrivateRoutes';

function App() {
  const { status} = useSelector( state => state.auth);
  

  //const dispatch = useDispatch();

  console.log("En app.jsx el estatus es:" + status)
  
  // Guardar la section
  //useEffect(() => {
  //  onAuthStateChanged( FirebaseAuth, async( user) => {
  //    if( !user ) return dispatch( logout());
  //    
  //    
  //    const {uid, email, displayName, photoURL} = user;
  //    dispatch( login({uid, email, displayName, photoURL}));
  //  })
  //
  //  
  //}, [])
  return (
    <>
      <Router>
        
        <Routes>
            
            
            <Route element={<PrivateRoutes/>}>
              <Route path='/' element={<HomeSection/>}/>
            </Route>
             
            <Route path='/authentication' element={<LoginPage/>}>
              <Route path='/authentication/login' element={<Login/>} />
              <Route path='/authentication/register' element={<Register/>} />
            </Route>  
              
              
        </Routes>
      
      </Router>
    </>
  )
}

export default App
