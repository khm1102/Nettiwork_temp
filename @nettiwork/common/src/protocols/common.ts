import { object, DecoderType, boolean } from "decoders";

// ok response
const okResp = object({
  ok: boolean,
});
export type OkResp = DecoderType<typeof okResp>;
