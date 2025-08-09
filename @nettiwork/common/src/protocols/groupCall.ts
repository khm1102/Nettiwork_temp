import { object, DecoderType, uuidv4, string } from "decoders";

// join room
const joinRoomReq = object({
  roomId: uuidv4,
});
const joinRoomResp = object({
  accessToken: string,
});
export type JoinRoomReq = DecoderType<typeof joinRoomReq>;
export type JoinRoomResp = DecoderType<typeof joinRoomResp>;
