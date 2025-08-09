import { CommonError, logger } from "@nettiwork/common";
import { NextFunction, Request, Response } from "express";
import { config } from "../config";

/**
 * 에러를 클라이언트 측으로 반환.
 * development 모드의 경우 message와 stack도 추가됨
 *
 * @param error
 * @param req
 * @param res
 * @param next
 */
export function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (error instanceof CommonError) {
    res.json({ error });
  } else if (error instanceof Error) {
    logger.error(error.message);

    if (config.nodeEnv === "development") {
      res.json({
        error: {
          name: error.name,
          message: error.message,
          stack: error.stack,
        },
      });
    }
  }
  next();
}
