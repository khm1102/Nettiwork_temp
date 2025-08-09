import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.use(authenticate);

export default router;
