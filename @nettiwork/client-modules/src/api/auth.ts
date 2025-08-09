import { AuthProtocol } from "@nettiwork/common";
import { postJSON } from "./utils";

/**
 * 해당 메일로 로그인 코드 요청
 *
 * @param userData
 * @returns `OkResp`
 */
export async function sendLoginCode(
  userData: AuthProtocol.SendLoginCodeReq,
): Promise<AuthProtocol.SendLoginCodeResp> {
  return (await postJSON(
    "/auth/send-login-code",
    userData,
  )) as AuthProtocol.SendLoginCodeResp;
}

/**
 * 메일로 전송된 로그인 코드와 일치하는지 확인한 후 JWT 발급
 *
 * @param verificationData
 * @returns `JWT`
 */
export async function login(
  verificationData: AuthProtocol.LoginReq,
): Promise<AuthProtocol.LoginResp> {
  return (await postJSON(
    "/auth/login",
    verificationData,
  )) as AuthProtocol.LoginResp;
}
