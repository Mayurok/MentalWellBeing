import './App.css';
import Head from './Navbar/nav';
import Dashboard from './Dashboard/dashboard';
import Aboutus from './About/aboutus';
import Login from './Login/login';
import Register from './Register/register';
import TestResult from './TestResult/testresult';
import Taketest from './Taketest/taketest';
import Anxiety from './Taketest/anxitytest';
import Support from './Support/support';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div class="user-select-none" >

      <Router>
        <Head />
     
        <Routes>
          <Route path='/' element={<Dashboard/>} >
            <Route path='/home/taketest' element={<Taketest/>}/>
            <Route path='/home/ataketest' element={<Anxiety/>}/>
            <Route path='/home/testresult' element={<TestResult/>}/>
          </Route>
           
          <Route path='/support' element={<Support/>} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
