require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');
// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());


// Connect to Database
connectDB();

app.use('/api/auth/', authRoutes);
app.use('/api/protected/', protectedRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('RBAC System API Running');
});

// Listen on Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
