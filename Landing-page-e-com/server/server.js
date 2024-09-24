const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const { connectDB } = require('./config/db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
connectDB();

// Routes
app.use('/api/products', productRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
