import React, { useState } from 'react';
import axios from 'axios';

const AddFlightForm = () => {
  const [flight, setFlight] = useState({
    flightNumber: '',
    departure: '',
    destination: '',
    date: '',
    time: '',
    seats: 0,
    price: 0
  });

  const handleChange = (e) => {
    setFlight({ ...flight, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/flights', flight)
      .then(() => alert('Flight added successfully'))
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Flight</h2>
      {Object.keys(flight).map(key => (
        <input
          key={key}
          type={key === 'seats' || key === 'price' ? 'number' : 'text'}
          name={key}
          placeholder={key}
          value={flight[key]}
          onChange={handleChange}
        />
      ))}
      <button type="submit">Add Flight</button>
    </form>
  );
};

export default AddFlightForm;
