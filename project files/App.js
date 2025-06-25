// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegister from './components/LoginRegister';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/user/home" element={<h2>User Home</h2>} />
        <Route path="/admin/home" element={<h2>Admin Home</h2>} />
        <Route path="/operator/home" element={<h2>Flight Operator Home</h2>} />
      </Routes>
    </Router>
  );
};

export default App;

