const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const claimRoutes = require('./routes/claimRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/pointsleaderboard', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'));

app.use('/api/users', userRoutes);
app.use('/api/claim', claimRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
