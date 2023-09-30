const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_KEY;

const authenticateJWT = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Authorization token not provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = {
      id: decoded.userId,
      role: decoded.role
    };

    next();
  });
}

module.exports = authenticateJWT;

