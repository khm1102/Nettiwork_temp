import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import juice from "juice";
import fs from "fs";
import * as EmailValidator from "email-validator";
import { config } from "../config";
import { CommonError, logger } from "@nettiwork/common";

type TemplateName = "login-code";

const transporter = nodemailer.createTransport({
  host: config.email.host,
  port: config.email.port,
  secure: true,
  auth: {
    user: config.email.user,
    pass: config.email.pass,
  },
});

/**
 * 이메일 포맷 기반 유효성 검사(도메인 확인 X)
 *
 * @param email
 * @returns `유효한 이메일인가?`
 */
export function isValidEmail(email: string): boolean {
  return EmailValidator.validate(email);
}

/**
 * CSS 적용 및 이메일 템플릿 렌더
 *
 * @param templateName 확장자 제외한 템플릿 파일 이름
 * @param data ejs 렌더 데이터
 * @returns `렌더된 html content`
 */
async function renderEmailTemplate(
  templateName: TemplateName,
  data: object,
): Promise<string> {
  const templatePath = path.join(
    __dirname,
    `../views/email-templates/${templateName}.ejs`,
  );
  const rawHtml = await ejs.renderFile(templatePath, data);

  const cssPath = path.join(
    __dirname,
    `../views/email-templates/styles/${templateName}.css`,
  );
  const css = fs.readFileSync(cssPath, "utf-8");

  return juice.inlineContent(rawHtml, css);
}

/**
 * 로그인에 이용되는 LoginCode가 담긴 이메일 전송
 *
 * @param to 보낼 타겟
 * @param code login code
 */
export async function sendLoginCodeEmail(to: string, code: string) {
  try {
    const htmlContent = await renderEmailTemplate("login-code", { code });
    const mailOptions: nodemailer.SendMailOptions = {
      from: '"Nettiwork" <noreply@nettiwork.com>',
      to,
      subject: "Hello👋 Check your login code!",
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    // TODO: logger 수정
    logger.error(`Email: ${error}`);
    throw new CommonError("please-try-again-later");
  }
}
