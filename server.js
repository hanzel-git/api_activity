 require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');

// Import the routes FIRST
const apiRoutes = require('./src/routes/apiRoutes');

const app = express();

// CONNECT DB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

// Use routes AFTER they are imported
app.use(BASE_URI, apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Base URI: http://localhost:${PORT}${BASE_URI}`);
});