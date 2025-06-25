import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateFlightForm = ({ flightId }) => {
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    axios.get(`/api/flights/${flightId}`)
      .then(res => setFlight(res.data))
      .catch(err => console.log(err));
  }, [flightId]);

  const handleChange = (e) => {
    setFlight({ ...flight, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    axios.put(`/api/flights/${flightId}`, flight)
      .then(() => alert('Flight updated'))
      .catch(err => console.log(err));
  };

  if (!flight) return <p>Loading...</p>;

  return (
    <div>
      <h2>Update Flight</h2>
      {Object.keys(flight).map(key => (
        key !== '_id' && (
          <input
            key={key}
            type={key === 'seats' || key === 'price' ? 'number' : 'text'}
            name={key}
            value={flight[key]}
            onChange={handleChange}
          />
        )
      ))}
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateFlightForm;
