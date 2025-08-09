import { getRandomUint32 } from "./security";

const NUMBER = "0123456789";
const UPPERCASE_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_ALPHABET = "abcdefghijklmnopqrstuvwxyz";

/**
 * 로그인 코드 생성
 *
 * @returns `6자리 로그인 코드(대문자 알파벳 + 숫자)`
 */
export function generateLoginCode(): string {
  // TODO: replace secure random
  const BASE_CHARS = NUMBER + UPPERCASE_ALPHABET;
  let loginCode = "";

  for (let i = 0; i < 6; i++) {
    loginCode += BASE_CHARS[getRandomUint32() % BASE_CHARS.length];
  }
  return loginCode;
}
