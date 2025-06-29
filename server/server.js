
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/auth.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'https://login-blush-two.vercel.app/',
  credentials: true
}));

app.use('/api/auth', authRoutes);

mongoose.connect(process.env.URI)
  .then(() => app.listen(5000, () => console.log('✅ Server running at http://localhost:5000')))
  .catch(err => console.log(err));
