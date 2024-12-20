import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './db/connectDB.js';
import authRoutes from "./routes/auth.route.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on port: ", PORT);
});


// mongodb+srv://harshitaggarwal100306:cSneumwR79fDJ124@cluster0.zhxsf.mongodb.net/
// cSneumwR79fDJ124