import express from 'express';
import mongoose from 'mongoose';

import postRoutes from './routes/';

const app = express(); 

app.use(bodyParser.json({ limit: "30mb", extended: true}));