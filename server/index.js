import express from "express";
import "dotenv/config";
import { db } from "./configs/db.js";  // Mengimpor koneksi DB
import userRouter from './routes/user.route.js';  // Mengimpor router untuk user
import { errorHandler } from "./configs/middleware.js";  // Mengimpor middleware error
import { ObjectId } from "mongodb";

const app = express();

// Mengambil port dari environment variable
const PORT = process.env.PORT || 5000;  // Default ke 5000 jika PORT tidak ditemukan

// Middleware untuk parsing JSON request body
app.use(express.json());

// Route untuk user
app.use('/api/v1/users', userRouter);

// Route default untuk root path
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello World",
    });
});

// 404 handler jika route tidak ditemukan
app.use('*', (req, res) => {
    res.status(404).json({ message: "Not Found" });
});

// Middleware error handler
app.use(errorHandler);

// Menjalankan server pada port yang ditentukan
app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});
