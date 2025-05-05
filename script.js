const jwt = require('jsonwebtoken');

/**
 * Encrypts a payload into a JWT with an expiration time.
 *
 * @param {Object} payload - The data you want to encode into the token.
 * @param {string} secret - Your JWT secret key.
 * @returns {string} - A signed JWT with expiry.
 */
const encrypt = (payload, secret) => {
  // Token expires in 1 hour
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  return token;
};

module.exports = encrypt;
