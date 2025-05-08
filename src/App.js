import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';  // Import Routes properly
import Home from '../src/Screens/Home'; 
import Shows from '../src/Screens/Shows';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shows" element={<Shows />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
