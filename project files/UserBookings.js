import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('/api/bookings/user')  // API for fetching user bookings
      .then(res => setBookings(res.data))
      .catch(err => console.log(err));
  }, []);

  const cancelBooking = (bookingId) => {
    axios.delete(`/api/bookings/${bookingId}`)
      .then(() => {
        setBookings(bookings.filter(b => b._id !== bookingId));
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Your Bookings</h2>
      {bookings.map(booking => (
        <div key={booking._id}>
          <p>Flight: {booking.flightNumber}</p>
          <p>Date: {booking.date}</p>
          <button onClick={() => cancelBooking(booking._id)}>Cancel Booking</button>
        </div>
      ))}
    </div>
  );
};

export default UserBookings;
