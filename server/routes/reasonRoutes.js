import express from "express";
import { getRandomReason } from "../controllers/reasonController.js";

const router = express.Router();

router.get("/random", getRandomReason);

export default router;
