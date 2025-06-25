import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FlightList = () => {
  const [flights, setFlights] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/flights').then(res => setFlights(res.data));
    axios.get('/api/bookings').then(res => setBookings(res.data));
    axios.get('/api/users').then(res => setUsers(res.data));
  }, []);

  return (
    <div>
      <h2>All Flights</h2>
      {flights.map(f => <div key={f._id}>{f.flightNumber} - {f.departure} to {f.destination}</div>)}

      <h2>All Bookings</h2>
      {bookings.map(b => <div key={b._id}>{b.username} booked {b.flightNumber}</div>)}

      <h2>All Users</h2>
      {users.map(u => <div key={u._id}>{u.username} - {u.role}</div>)}
    </div>
  );
};

export default FlightList;
