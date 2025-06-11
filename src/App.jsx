import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Events from './pages/Events';
import Home from './pages/Home';
import Coordinators from './pages/Coordinators';
import About from './pages/About';
import Contact from './pages/Contact'
import Login from './pages/Login';
import Userlogin from './components/Userlogin';
 
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Coordinators" element={<Coordinators />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
           <Route path="/Userlogin" element={<Userlogin />} />
           
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
