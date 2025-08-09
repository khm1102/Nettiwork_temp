import { Request, Response, NextFunction } from "express";
import { CommonError } from "@nettiwork/common";
import { verifyToken } from "../utils/jwt";

/**
 * request에서 jwt에 저장된 userId를 추출
 *
 * @param req
 * @param res
 * @param next
 */
export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const token = req.headers.authorization?.split(" ").at(-1);

  if (!token) {
    throw new CommonError("please-login-first");
  }

  try {
    const decoded = verifyToken(token);
    req.user = {
      id: decoded.id,
    };
    next();
  } catch (error) {
    throw new CommonError("please-try-again");
  }
}
