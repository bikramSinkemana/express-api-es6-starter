import { Router } from "express";

import userRoutes from "./routes/userRoutes";

/**
 * Contains all API routes for the application.
 */
const router = Router();

router.use("/users", userRoutes);

export default router;
