const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_KEY;

const createToken = (data) => {
    return jwt.sign(data, secretKey, { expiresIn: '24h' });
}

const verifyToken = (token) => {
    return jwt.verify(token, secretKey);
}

module.exports = { createToken, verifyToken };