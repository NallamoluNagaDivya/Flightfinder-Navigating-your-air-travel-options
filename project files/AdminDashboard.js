import React from 'react';
import AddFlightForm from './AddFlightForm';
import UpdateFlightForm from './UpdateFlightForm';
import FlightList from './FlightList';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AddFlightForm />
      {/* You can pass flightId as a prop based on selection */}
      {/* <UpdateFlightForm flightId="SOME_ID" /> */}
      <FlightList />
    </div>
  );
};

export default AdminDashboard;
