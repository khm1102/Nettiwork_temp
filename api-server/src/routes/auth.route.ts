import { Router } from "express";
import * as Auth from "../controllers/auth.controller";
import "express-async-errors";

const router = Router();

router.post("/send-login-code", Auth.sendLoginCode);
router.post("/login", Auth.login);
// router.post("/register/verify", Auth.verifyCode);
// router.post("/login", Auth.login);
// router.post("/login/verify", Auth.sendVerificationCode);

export default router;
