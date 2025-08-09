import { Request, Response } from "express";
import * as authService from "../services/auth.service";
import { AuthProtocol } from "@nettiwork/common";

/**
 * 로그인 코드 전송
 *
 * @param req
 * @param res
 */
export async function sendLoginCode(req: Request, res: Response) {
  const data = req.body as AuthProtocol.SendLoginCodeReq;
  const resp: AuthProtocol.SendLoginCodeResp = {
    ok: true,
  };

  await authService.sendLoginCode(data.email);

  res.json(resp);
}

/**
 * 로그인
 *
 * @param req
 * @param res
 */
export async function login(req: Request, res: Response) {
  const data = req.body as AuthProtocol.LoginReq;
  const resp: AuthProtocol.LoginResp = {
    jwt: "",
  };

  resp.jwt = await authService.login(data.email, data.loginCode);

  res.json(resp);
}

// export const sendVerificationCode = async (req: Request, res: Response) => {
//   const { email } = req.body;
//   await authService.sendVerificationCode(email);
//   res.json({ message: "Verification code sent." });
// };

// export const verifyCode = async (req: Request, res: Response) => {
//   const { email, code } = req.body;
//   const verified = await authService.verifyCode(email, code);
//   res.json({ verified });
// };

// export const login = async (req: Request, res: Response) => {
//   const { email, code } = req.body;
//   const token = await authService.login(email, code);
//   res.json({ token });
// };
