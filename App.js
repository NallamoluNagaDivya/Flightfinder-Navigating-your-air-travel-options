import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import UserBookings from './components/UserBookings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/my-bookings" element={<UserBookings />} />
      </Routes>
    </Router>
  );
}

export default App;
