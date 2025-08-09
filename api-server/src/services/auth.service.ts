import { CommonError } from "@nettiwork/common";
import { isValidEmail, sendLoginCodeEmail } from "../utils/email";
import { generateLoginCode } from "../utils/auth";
import { signToken } from "../utils/jwt";

// email -> login code
const emailToLoginCode = new Map<string, string>();

/**
 * 가입 코드를 전송.
 * 가입 코드는 5분간 유효함.
 * 메일 형식이 맞지 않으면 `throw CommonError("invalid-email-format")`
 *
 * @param email
 */
export async function sendLoginCode(email: string): Promise<void> {
  // const userRepository = AppDataSource.getRepository(User);
  // const newUser = userRepository.create(userData);
  // return await userRepository.save(newUser);
  if (!isValidEmail(email)) {
    throw new CommonError("invalid-email-format");
  }
  const loginCode = generateLoginCode();
  emailToLoginCode.set(email, loginCode);

  // TODO: 5분후 제거

  await sendLoginCodeEmail(email, loginCode);
}

/**
 * 로그인 코드 확인한 후 JWT 반환.
 * 맞지 않으면 `throw CommonError("invalid-login-code")`
 *
 * @param email
 * @param loginCode
 * @returns `JWT`
 */
export async function login(email: string, loginCode: string): Promise<string> {
  if (emailToLoginCode.get(email) !== loginCode) {
    throw new CommonError("invalid-login-code");
  }

  return signToken({ id: 1 });
}

// export const sendVerificationCode = async (email: string): Promise<void> => {
//   const code = generateVerificationCode();
//   verificationCodes[email] = code;
//   await sendEmail(email, "Your Verification Code", `Your code is: ${code}`);
// };

// export const verifyCode = async (email: string, code: string): Promise<boolean> => {
//   if (verificationCodes[email] === code) {
//     delete verificationCodes[email];
//     return true;
//   }
//   throw { status: 400, message: "Invalid verification code." };
// };

// export const login = async (email: string, code: string): Promise<string> => {
//   if (!await verifyCode(email, code)) {
//     throw { status: 400, message: "Invalid verification attempt." };
//   }
//   const userRepository = AppDataSource.getRepository(User);
//   const user = await userRepository.findOneBy({ email: email });
//   if (!user) {
//     throw { status: 404, message: "User not found." };
//   }
//   return jwt.sign({ id: user.id, email: user.email, name: user.name }, config.jwtSecret, { expiresIn: "1h" });
// };
