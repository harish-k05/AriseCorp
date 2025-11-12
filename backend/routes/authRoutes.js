import express from "express";
import authController from "../controllers/authControllers.js";

const router = express.Router();

router.get("/auth",authController);

export default router;