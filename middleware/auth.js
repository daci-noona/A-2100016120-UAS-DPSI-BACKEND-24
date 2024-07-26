module.exports = function(role) {
    return function(req, res, next) {
      const userRole = req.user && req.user.role; 
      console.log("INI ROLEEEEEEEEEE",userRole)
      if (userRole === role) {
        next();
      } else {
        res.status(403).json({ message: 'Forbidden: You do not have the required role' });
      }
    };
  };