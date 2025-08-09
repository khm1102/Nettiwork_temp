import { Router } from "express";
import * as GroupCall from "../controllers/groupCall.controller";
import "express-async-errors";

const router = Router();

router.post("/join-room", GroupCall.joinRoom);

export default router;
