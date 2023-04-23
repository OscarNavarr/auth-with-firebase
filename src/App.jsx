import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import { LoginPage} from './pages/index';
import { HomeSection, Login, Register } from './components';
import { useSelector } from 'react-redux';

function App() {
  const { status} = useSelector( state => state.auth);
  
  return (
    <>
      <Router>
        
        <Routes>
            
            {
              (status === 'authenticated')
                ? <Route path='/*' element={<HomeSection/>}/>
                : (
                  <Route path='/authentication' element={<LoginPage/>}>
                    <Route path='/authentication/login' element={<Login/>} />
                    <Route path='/authentication/register' element={<Register/>} />
                  </Route> 
                )
            }
           
              
            
             <Route path='/*' element={<Navigate to={'/authentication/login'}/>}/>
             
              
              
        </Routes>
      
      </Router>
    </>
  )
}

export default App
