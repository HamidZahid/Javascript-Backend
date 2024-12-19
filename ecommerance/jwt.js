const jwt = require('jsonwebtoken');

const secretKey = 'your-secret-key';

// Function to generate a JWT token
function generateToken(payload) {
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

// Function to verify a JWT token
function verifyToken(token) {
    try {
        return jwt.verify(token, secretKey);
    } catch (err) {
        return null;
    }
}

// Example usage
const userPayload = { id: 1, username: 'user1' };
const token = generateToken(userPayload);
console.log('Generated Token:', token);

const verifiedPayload = verifyToken(token);
console.log('Verified Payload:', verifiedPayload);