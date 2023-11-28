import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/userRoutes.js';
import requestRoutes from './routes/requestRoutes.js';
import carRoutes from './routes/carRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';
import loginRoutes from './routes/loginRoutes.js';
import refreshTokenRoutes from './routes/refreshTokenRoutes.js';
import emailRoutes from './routes/emailRoutes.js'
import throttledQueue from 'throttled-queue';
//Set ThrottleQueue, so api requests to cloudinary image hoster will be managed and queued if going
//Above api ratelimit.
//Set The Throttle to 500 requests per one hour.
export const throttle = throttledQueue(500,3600000);

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use('/user', userRoutes);
app.use('/request', requestRoutes);
app.use('/car', carRoutes);
app.use('/employee', employeeRoutes);
app.use('/login', loginRoutes);
app.use('/email', emailRoutes)
app.use('/refresh-token', refreshTokenRoutes);
app.get('/test', (req, res) => {
  res.send('This is a test route.');
});

app.use((req, res, next) => {
  console.log('Request Body:', req.body); // Log the request body
  next();
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

