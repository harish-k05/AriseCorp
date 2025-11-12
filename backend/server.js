import express from "express";
import dotenv from "dotenv";

import router from "./routes/authRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();

app.use("/api/v1",router);

// DB CONNECTION
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is Running on ${5000}`);
})