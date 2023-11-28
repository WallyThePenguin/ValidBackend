import { Router } from 'express';
import { PrismaClient } from '../prisma/client/index.js';
import { PrismaClient as PrismaClient2 } from '../prisma/client2/index.js';
import { authenticateUser } from '../util/authUtil.js';

const prisma = new PrismaClient();
const prisma2 = new PrismaClient2();
const requestRoutes = Router();

// Create a request
requestRoutes.post('/', authenticateUser, async (req, res) => {
  try {
    const { location, type, price, ownerId, carId } = req.body;

    const employee = await prisma2.employee.findFirst({
      where: { deployed: false, working: true },
    });

    if (!employee) {
      return res.status(404).json({ error: 'No available employee found' });
    }

    const request = await prisma.request.create({
      data: {
        location: location,
        type: type,
        price: price,
        owner: { connect: { id: ownerId } },
        employee: { connect: { id: employee.id } },
        car: { connect: { id: carId } },
      },
    });

    res.json(request);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create request' });
  }
});


// Get request by id
requestRoutes.get('/:id',authenticateUser, async (req, res) => {
  try {
    const requestId = parseInt(req.params.id);

    const request = await prisma.request.findUnique({
      where: { id: requestId },
      include: { owner: true, employee: true, car: true },
    });

    if (request) {
      res.status(200).json({ request });
    } else {
      res.status(404).json({ error: 'Request not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update employeeId
requestRoutes.put('/:id/employee',authenticateUser, async (req, res) => {
  try {
    const { id } = req.params;
    const { employeeId } = req.body;

    const updatedRequest = await prisma.request.update({
      where: { id: Number(id) },
      data: { employee: { connect: { id: employeeId } } },
    });

    res.json(updatedRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update request' });
  }
});

// Update finished
requestRoutes.put('/:id/finished',authenticateUser, async (req, res) => {
  try {
    const { id } = req.params;
    const { finished } = req.body;

    const updatedRequest = await prisma.request.update({
      where: { id: Number(id) },
      data: { finished: finished },
    });

    res.json(updatedRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update request' });
  }
});

// Update cancelled
requestRoutes.put('/:id/cancelled',authenticateUser, async (req, res) => {
  try {
    const { id } = req.params;
    const { cancelled } = req.body;

    const updatedRequest = await prisma.request.update({
      where: { id: Number(id) },
      data: { cancelled: cancelled },
    });

    res.json(updatedRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update request' });
  }
});

// Update rating
requestRoutes.put('/:id/rating',authenticateUser, async (req, res) => {
  try {
    const { id } = req.params;
    const { rating } = req.body;

    const updatedRequest = await prisma.request.update({
      where: { id: Number(id) },
      data: { rating: rating },
    });

    res.json(updatedRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update rating' });
  }
});

export default requestRoutes;


