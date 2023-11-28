import { Router } from 'express';
import { PrismaClient } from '../prisma/client/index.js';
import  {PrismaClient as PrismaClient2} from '../prisma/client2/index.js';


const prisma = new PrismaClient();
const prisma2 = new PrismaClient2

const employeeRoutes = Router();

// Create an employee
employeeRoutes.post('/', async (req, res) => {
    try {
      const {
        phoneNumber,
        email,
        rating,
        name,
        password,
        DOB,
        ssn,
      } = req.body;
  
      const employee = await prisma.employee.create({
        data: {
          phonenumber: phoneNumber,
          email: email,
          rating: rating,
          name: name,
          password: password ,
        },
      });
  
      const employee2 = await prisma2.employee.create({
        data: {
          rating:rating,
          phonenumber: phoneNumber,
          email: email,
          name: name,
          password: password,
          DOB: DOB,
          ssn: ssn,
        },
      });
  
      res.status(201).json({ employee });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// Update the phone number of an employee
employeeRoutes.put('/:id/phone', async (req, res) => {
  try {
    const employeeId = parseInt(req.params.id);
    const { phoneNumber } = req.body;

    const updatedEmployee = await prisma.employee.update({
      where: { id: employeeId },
      data: { phonenumber: phoneNumber },
    });

    const updatedEmployee2 = await prisma2.employee.update({
        where: { id: employeeId },
        data: { phonenumber: phoneNumber, pverify: false },
      });

    res.status(200).json({ employee: updatedEmployee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update the email of an employee
employeeRoutes.put('/:id/email', async (req, res) => {
  try {
    const employeeId = parseInt(req.params.id);
    const { email } = req.body;

    const updatedEmployee = await prisma.employee.update({
      where: { id: employeeId },
      data: { email: email },
    });

    const updatedEmployee2 = await prisma2.employee.update({
        where: {id: employeeId},
        data: {email: email, everify: false}
    })

    res.status(200).json({ employee: updatedEmployee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update the rating of an employee
employeeRoutes.put('/:id/rating', async (req, res) => {
  try {
    const employeeId = parseInt(req.params.id);
    const { rating } = req.body;

    const updatedEmployee = await prisma.employee.update({
      where: { id: employeeId },
      data: { rating: rating },
    });
    const updatedEmployee2 = await prisma2.employee.update({
        where: { id: employeeId },
        data: { rating: rating },
      });

    res.status(200).json({ employee: updatedEmployee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update the password of an employee
employeeRoutes.put('/:id/password', async (req, res) => {
  try {
    const employeeId = parseInt(req.params.id);
    const { password } = req.body;

    const updatedEmployee = await prisma.employee.update({
      where: { id: employeeId },
      data: { password: password },
    });
    const updatedEmployee2 = await prisma2.employee.update({
        where: { id: employeeId },
        data: { password: password },
      });

    res.status(200).json({ employee: updatedEmployee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

employeeRoutes.put('/:id/everify', async (req, res)=> {
    try {
        const employeeId = parseInt(req.params.id);
        const { everify } = req.body

        const updatedEmployee2 = await prisma2.employee.update({
            where: {id: employeeId},
            data: { everify: everify},
        });
        res.status(200).json("Success");
    } catch (error){
        console.error(error);
    res.status(500).json({ error: 'Internal server error' });
    }
});

employeeRoutes.put('/:id/pverify', async (req, res)=> {
    try {
        const employeeId = parseInt(req.params.id);
        const { pverify } = req.body

        const updatedEmployee2 = await prisma2.employee.update({
            where: {id: employeeId},
            data: { pverify: pverify},
        });
        res.status(200).json("Success");
    } catch (error){
        console.error(error);
    res.status(500).json({ error: 'Internal server error' });
    }
});



export default employeeRoutes;
