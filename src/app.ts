import express, { json } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

// TODO Config Database and decomment this lines.
// Connect to DB
// import { connectDB } from './database/db.config.js';

// connectDB();

// Routes
import diariesRoutes from './routes/diaries.routes';

// Initializations
export const app = express();

//middlewares

// comunications with other servers
app.use(cors());

// Helmet can help protect your app from some well-known web vulnerabilities
// by setting HTTP headers appropriately.
app.use(helmet());

// sms servers develops
app.use(morgan('dev'));

// format json to object
app.use(json());

// Data format form
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/diaries', diariesRoutes);
