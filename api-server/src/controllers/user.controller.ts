import { Request, Response, NextFunction } from "express";
// import * as userService from "../services/user.service";

export async function getProfile(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    // const userId = req.user?.id;
    // const profile = await userService.getProfile(userId);
    // res.json(profile);
  } catch (error) {
    next(error);
  }
}
