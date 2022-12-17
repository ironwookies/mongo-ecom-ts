import cors from 'cors';
import logger from 'morgan';
import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import { productRouter } from './modules/product';
import { env, appPort } from './utils/config';
import { connectToMongoDB } from './db';

const app: Application = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: [
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Origin',
      'Acces-Control-Allow-Methods',
      'Origin',
      'withCredentials',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
      'X-HTTP-Method-Override',
      'Set-Cookie',
      'Request',
    ],
  })
);

app.use(logger('dev'));

app.use(express.json());

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(cookieParser());

connectToMongoDB();

const port = appPort || 5001;

app.listen(port, () => {
  if (env === 'dev') {
    console.log(`TypeScript with Express http://localhost:${port}/`);
  }
});

app.use('/', productRouter);
