import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { LoginPage} from './pages/index';
import { HomeSection, Login, Register } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from './firebase/config';
import { login, logout } from './store/auth/authSlice';

function App() {
  const { status} = useSelector( state => state.auth);
  const dispatch = useDispatch();

  
  
  // Guardar la section
  useEffect(() => {
    onAuthStateChanged( FirebaseAuth, async( user) => {
      if( !user ) return dispatch( logout());
      
      
      const {uid, email, displayName, photoURL} = user;
      dispatch( login({uid, email, displayName, photoURL}));
    })
  
    
  }, [])
  console.log(status)
  return (
    <>
      <Router>
        
        <Routes>
          {(status === 'authenticated')
            ? <Route path='/home' element={<HomeSection/>}/>
            : (
              <Route path='/' element={<LoginPage/>}>
                <Route path='/' element={<Login/>} />
                <Route path='register' element={<Register/>} />
              </Route>
            )}
          
          
          
        </Routes>
      
      </Router>
    </>
  )
}

export default App
