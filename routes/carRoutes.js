import { Router } from 'express';
import { PrismaClient } from '../prisma/client/index.js';


const prisma = new PrismaClient();
const carRoutes = Router();

// Create a car
carRoutes.post('/', async (req, res) => {
  try {
    const { ownerId, make, model, year, color, plateNo } = req.body;

    const car = await prisma.car.create({
      data: {
        ownerId: ownerId,
        make: make,
        model: model,
        year: year,
        color: color,
        plateNo: plateNo
      }
    });

    res.status(201).json({ car });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//Get a Car by id
carRoutes.get('/:id', async (req, res) => {
    try {
      const carId = parseInt(req.params.id);
  
      const car = await prisma.car.findUnique({
        where: { id: carId }
      });
  
      if (car) {
        res.status(200).json({ car });
      } else {
        res.status(404).json({ error: 'Car not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// Delete a car
carRoutes.delete('/:id', async (req, res) => {
  try {
    const carId = parseInt(req.params.id);

    await prisma.car.delete({
      where: { id: carId }
    });

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update the plate number of a car
carRoutes.put('/:id/plate', async (req, res) => {
  try {
    const carId = parseInt(req.params.id);
    const { plateNo } = req.body;

    const updatedCar = await prisma.car.update({
      where: { id: carId },
      data: { plateNo: plateNo }
    });

    res.status(200).json({ car: updatedCar });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update the color of a car
carRoutes.put('/:id/color', async (req, res) => {
  try {
    const carId = parseInt(req.params.id);
    const { color } = req.body;

    const updatedCar = await prisma.car.update({
      where: { id: carId },
      data: { color: color }
    });

    res.status(200).json({ car: updatedCar });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default carRoutes;