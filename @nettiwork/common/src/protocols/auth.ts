import { object, string, DecoderType } from "decoders";
import { OkResp } from "./common";

// send login code
const sendLoginCodeReq = object({
  email: string,
});
export type SendLoginCodeReq = DecoderType<typeof sendLoginCodeReq>;
export type SendLoginCodeResp = OkResp;

// login
const loginReq = object({
  email: string,
  loginCode: string,
});
const loginResp = object({
  jwt: string,
});
export type LoginReq = DecoderType<typeof loginReq>;
export type LoginResp = DecoderType<typeof loginResp>;
