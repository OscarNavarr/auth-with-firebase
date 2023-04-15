import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { LoginPage} from './pages/index';
import { Login, Register } from './components';

function App() {

  return (
    <>
      <Router>
        
        <Routes>
          <Route path='/' element={<LoginPage/>}>
            <Route path='/' element={<Login/>} />
            <Route path='register' element={<Register/>} />
          </Route>
        </Routes>
      
      </Router>
    </>
  )
}

export default App
