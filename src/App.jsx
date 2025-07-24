import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Events from './pages/Events';
import Home from './pages/Home';
import Coordinators from './pages/Coordinators';
import About from './pages/About';
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Login from './components/Login';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Coordinators" element={<Coordinators />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signup" element={<Signup />} />
           <Route path="/Login" element={<Login />} />
           
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
