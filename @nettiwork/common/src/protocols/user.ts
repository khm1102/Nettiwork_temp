import { object, number, string, DecoderType } from "decoders";

// get profile
const getProfileReq = object({
  userId: number,
});
const getProfileResp = object({
  userName: string,
});
export type GetProfileReq = DecoderType<typeof getProfileReq>;
export type GetProfileResp = DecoderType<typeof getProfileResp>;
