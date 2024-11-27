const express = require('express');
const { authorizeRoles } = require('../middlewares/authorizeRoles');
const { protect } = require('../middlewares/auth.js'); // Protect routes with JWT

const router = express.Router();

// Routes accessible by Admin only
router.get('/admin', protect, authorizeRoles(['admin']), (req, res) => {
  res.json({ message: 'Welcome, Admin! This is an admin-only route.' });
});

// Routes accessible by both Admin and Moderator
router.get('/moderator', protect, authorizeRoles(['admin', 'moderator']), (req, res) => {
  res.json({ message: 'Welcome, Moderator! You can access this route.' });
});

// Routes accessible by all roles
router.get('/user', protect, authorizeRoles(['admin', 'moderator', 'user']), (req, res) => {
  res.json({ message: 'Welcome, User! You can access this route.' });
});

module.exports = router;
