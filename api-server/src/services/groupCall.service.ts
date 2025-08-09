import { GroupCallProtocol } from "@nettiwork/common";
import { AccessToken } from "livekit-server-sdk";
import { config } from "../config";

/**
 * 방에 참가.
 * 참여하고자 하는 방이 없다면 `throw CommonError("group-call-not-found")`
 *
 * @param roomData 참여하고자 하는 Room 정보
 * @returns `LiveKit access token`
 */
export async function joinRoom(
  roomData: GroupCallProtocol.JoinRoomReq,
): Promise<string> {
  const accessToken = new AccessToken(
    config.livekit.apiKey,
    config.livekit.apiSecret,
    {
      identity: `${Math.random() * 100}`,
      ttl: "10h",
    },
  );

  accessToken.addGrant({
    room: roomData.roomId,
    roomJoin: true,
  });

  return await accessToken.toJwt();
}
