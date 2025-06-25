const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/flightBooking');

const flightRoutes = require('./routes/flightRoutes');
app.use('/api/flights', flightRoutes);

app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});
