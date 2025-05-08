import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';  // Import Routes properly
import Home from '../src/Screens/Home'; 
import AboutUs from '../src/Screens/AboutUs'; // Make sure the path is correct

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      
    </Router>
  );
}

export default App;
