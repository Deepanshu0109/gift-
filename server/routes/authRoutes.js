import express from "express";
import { verifySecret } from "../controllers/authController.js";

const router = express.Router();

router.post("/verify", verifySecret);

export default router;
