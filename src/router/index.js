import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Pictures from '../pages/Pictures';

function RouterMain() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pictures' element={<Pictures />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default RouterMain;
