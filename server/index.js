import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { bookVisitRoute } from './routes/bookVisitRoute.js';

dotenv.config()

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.listen(8000, ()=> {
    console.log(`Server is running on port ${PORT}`);
});


app.use("/api/bookVisit", bookVisitRoute)


