import { Router } from 'express';
import { PrismaClient } from '../prisma/client/index.js';
import { generateToken,verifyToken } from '../util/authUtil.js';

const prisma = new PrismaClient();
const refreshTokenRoutes = Router();

// Token refresh route
refreshTokenRoutes.post('/', async (req, res) => {
  try {
    const { token } = req.body;

    // Verify and decode the token
    const decodedToken = verifyToken(token);

    if (!decodedToken) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    // Retrieve the user from the decoded token (e.g., using user ID)
    const user = await prisma.user.findUnique({
      where: { id: decodedToken.userId },
    });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // Generate a new token
    const newToken = generateToken(user);

    res.json({ success: true, token: newToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default refreshTokenRoutes;
