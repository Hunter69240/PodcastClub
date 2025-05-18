import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';  
import Home from '../src/Screens/Home'; 
import Shows from '../src/Screens/Shows';
import Contactus from './Screens/Contactus';
import AboutUs from './Screens/AboutUs';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shows" element={<Shows />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path='/AboutUs' element={<AboutUs />} />
        </Routes>
    </Router>
  );
}

export default App;
