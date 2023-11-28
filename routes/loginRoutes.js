import { Router } from 'express';
import { PrismaClient } from '../prisma/client/index.js';
import { generateToken } from '../util/authUtil.js';

const prisma = new PrismaClient();
const loginRoutes = Router();

// Login route
loginRoutes.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email: email },
    }).then(prisma.$disconnect());

    if (!user || !(password == user.password)) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    const gtoken = generateToken(user);

    res.json({ success: true, userId: user.id.toString(), password: user.password,token: gtoken.token, expiresIn: gtoken.expiresIn });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default loginRoutes;



