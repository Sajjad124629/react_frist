import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';


function App() {
  return (
     <>
     <Router>
          <Navbar/>

          <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/services' element={<Services/>}></Route>
          <Route exact path='/products' element={<Products/>}></Route>
          <Route exact path='/sign-up' element={<SignUp/>}></Route>
          </Routes>
     </Router>
    

     </>
   
   
  );
}

export default App;