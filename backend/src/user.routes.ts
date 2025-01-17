import express from "express"
import { getUserProfile, signIn, signUp } from "./controller";
import { authMiddleware } from "./middlewares";
const router = express.Router();

router.post("/sign-in", signIn);
router.post("/sign-up", signUp);
router.get("/profile", authMiddleware, getUserProfile);

export default router;