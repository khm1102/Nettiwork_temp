import { UserProtocol } from "@nettiwork/common";

export async function getProfile(): Promise<UserProtocol.GetProfileResp> {
  return {
    userName: "NAME",
  };
}
