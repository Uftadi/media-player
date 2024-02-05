import express from 'express';
import connectMongoose from './utils/connectMongoose.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRouter from './routes/authRouter.js';
import mediaRouter from './routes/mediaRouter.js';
import 'dotenv/config';
import path from 'path';

const PORT = process.env.PORT || 3000;
const BDConnect = connectMongoose();

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use('/uploads', express.static('uploads'));
app.use('/', authRouter);
app.use('/', mediaRouter);

if (await BDConnect) {
  console.log('MongoDB Connect');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
