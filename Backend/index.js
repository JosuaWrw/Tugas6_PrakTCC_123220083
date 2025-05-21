import express from 'express';
import cors from 'cors';
import route from './route/Route.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(route);

app.listen(3000, ()=> console.log("Server Telah Berjalan"))
