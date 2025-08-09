import jwt, { SignOptions } from "jsonwebtoken";
import { config } from "../config";

export interface JwtPayload {
  id: number;
}

export function signToken(payload: JwtPayload): string {
  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: "90 days",
  });
}

export function verifyToken(token: string): JwtPayload {
  return jwt.verify(token, config.jwtSecret) as JwtPayload;
}
