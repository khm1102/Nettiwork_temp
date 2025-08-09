import { GroupCallProtocol } from "@nettiwork/common";
import { postJSON } from "./utils";

/**
 * Group Call에 참가
 *
 * @param roomData
 * @returns `LiveKit access token`
 */
export async function joinRoom(
  roomData: GroupCallProtocol.JoinRoomReq,
): Promise<GroupCallProtocol.JoinRoomResp> {
  return (await postJSON(
    "/group-call/join-room",
    roomData,
  )) as GroupCallProtocol.JoinRoomResp;
}
