import express from "express"
import { getRecommendedMovies, getSingleMovie, getUserProfile, signIn, signUp } from "./controller";
import { authMiddleware } from "./middlewares";
const router = express.Router();

router.post("/sign-in", signIn);
router.post("/sign-up", signUp);
router.get("/profile", authMiddleware, getUserProfile);
router.post("/get-movies", authMiddleware, getRecommendedMovies);
router.post("/movie", authMiddleware, getSingleMovie);

export default router;