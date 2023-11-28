import pkg from 'jsonwebtoken';
const { verify, sign } = pkg;
import * as crypto from 'crypto';

let jwtSecret = generateSecretKey();

// Generate JWT token
export const generateToken = (user) => {
    const expiresIn = '1h'; // Set the expiration time here
    const token = sign({ userId: user.id, email: user.email }, jwtSecret, { expiresIn });
    return { token, expiresIn }; // Return the token and expiration time as an object
  };

export const verifyToken = (token) => {
    try {
      // Verify and decode the token
      const decodedToken = verify(token, jwtSecret);
  
      // Return the decoded token
      return decodedToken;
    } catch (error) {
      // Handle token verification errors
      console.error('Token verification failed:', error);
      return null;
    }
  };
// Authentication middleware
export const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    const { userId } = decoded;

    prisma.user
      .findUnique({ where: { id: parseInt(userId) } })
      .then((user) => {
        if (!user) {
          return res.status(401).json({ error: 'User not found' });
        }

        req.user = user;
        next();
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      });
  });
};

// Generate secret key
export function generateSecretKey() {
  const newSecretKey = crypto.randomBytes(32).toString('hex');
  setTimeout(() => {
    jwtSecret = generateSecretKey();
  }, 30 * 60 * 1000); // Regenerate the secret key every 30 minutes

  return newSecretKey;
}