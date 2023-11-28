import { Router } from 'express';
import { PrismaClient } from '../prisma/client/index.js';
import { authenticateUser, generateToken } from '../util/authUtil.js';

const prisma = new PrismaClient();
const userRoutes = Router();

// Authorization middleware
const authorizeUser = (req, res, next) => {
  const { id } = req.params;
  const { user } = req;

  if (parseInt(id) !== user.id) {
    return res.status(403).json({ error: 'Unauthorized access' });
  }

  next();
};

// Create a user
userRoutes.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const body = req.body;
    const existingUser = await prisma.user.findUnique({
       where: {
        email: body.name.email,
       }
    });

    if (existingUser) {
      return res.json({ exists: true, error: 'Email already exists' });
    }

    const user = await prisma.user.create({
      data: {
        name: body.name.name,
        phonenumber: body.name.phoneNumber,
        email: body.name.email,
        password: body.name.password,
      },
    });

    const token = generateToken(user);

    res.json({ exists: false, user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


// Update phone number
userRoutes.put('/:id/phonenumber', authenticateUser, authorizeUser, async (req, res) => {
  try {
    const { id } = req.params;
    const { phonenumber } = req.body;

    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { phonenumber: phonenumber, pverify: false },
    });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Update pVerify
userRoutes.put('/:id/pVerify', authenticateUser, authorizeUser, async (req, res) => {
  try {
    const { id } = req.params;
    const { pverify } = req.body;

    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { pverify },
    });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Update email
userRoutes.put('/:id/email', authenticateUser, authorizeUser, async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;

    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { email:email, everify: false },
    });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Update eVerify
userRoutes.put('/:id/eVerify', authenticateUser, authorizeUser, async (req, res) => {
  try {
    const { id } = req.params;
    const { everify } = req.body;

    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { everify:everify },
    });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Update password
userRoutes.put('/:id/password', authenticateUser, authorizeUser, async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;

    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { password:password },
    });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Get user by ID
userRoutes.get('/:id', authenticateUser, authorizeUser, async (req, res) => {
  try {
    const { user } = req;
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

export default userRoutes;

