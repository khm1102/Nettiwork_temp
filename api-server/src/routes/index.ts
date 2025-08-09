import { Router } from "express";
import authRoutes from "./auth.route";
import groupCallRoutes from "./groupCall.route";

const router = Router();

router.use("/auth", authRoutes);
router.use("/group-call", groupCallRoutes);

export default router;
