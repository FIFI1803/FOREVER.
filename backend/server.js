import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connect } from 'mongoose';
import connectDB from './config/mongodb.js';
import cloudinaryConfig from './config/cloudinary.js';
// Import routes
import userRouter from './routes/userRoute.js'; 

// App Configuration
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
cloudinaryConfig();

// Middleware
app.use(express.json());
app.use(cors());

//api endpoints
app.use('/api/user', userRouter);
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});