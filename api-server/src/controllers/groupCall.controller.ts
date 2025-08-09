import { Request, Response } from "express";
import * as groupCallService from "../services/groupCall.service";
import { GroupCallProtocol } from "@nettiwork/common";

/**
 * 그룹 콜 참가
 *
 * @param req
 * @param res
 */
export async function joinRoom(req: Request, res: Response) {
  const data = req.body as GroupCallProtocol.JoinRoomReq;

  const accessToken = await groupCallService.joinRoom(data);

  res.json({
    accessToken: accessToken,
  } as GroupCallProtocol.JoinRoomResp);
}
