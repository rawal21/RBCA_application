// Middleware for Role-Based Access Control
exports.authorizeRoles = (allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user.role; 
    const userName = req.user.username;

    if (!allowedRoles.includes(userRole , userName)) {
      return res.status(403).json({ error: 'Access denied. You do not have permission to access this route.' });
    }

    next(); // Continue if the role is allowed
  };
};
