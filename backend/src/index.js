import express from 'express'
import dotenv from 'dotenv'

import { connectDB } from './lib/db.js';;
import authRoutes from "./routes/authRoute.js";

dotenv.config()
const app = express();

const PORT = process.env.PORT

app.use(express.json())
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
    connectDB();
})