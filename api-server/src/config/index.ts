import dotenv from "dotenv";

dotenv.config();

function getEnvVariable(name: string) {
  const variable = process.env[name];

  if (!variable) {
    throw new Error(`process.env.${name} is undefined.`);
  }
  return variable;
}

export const config = {
  nodeEnv: getEnvVariable("NODE_ENV"),
  port: getEnvVariable("PORT"),
  jwtSecret: getEnvVariable("JWT_SECRET"),
  vpcCidr: getEnvVariable("VPC_CIDR"),
  db: {
    host: getEnvVariable("DB_HOST"),
    port: Number(getEnvVariable("DB_PORT")),
    user: getEnvVariable("DB_USER"),
    password: getEnvVariable("DB_PASS"),
    database: getEnvVariable("DB_NAME"),
  },
  email: {
    host: getEnvVariable("EMAIL_HOST"),
    port: Number(getEnvVariable("EMAIL_PORT")),
    user: getEnvVariable("EMAIL_USER"),
    pass: getEnvVariable("EMAIL_PASS"),
  },
  livekit: {
    serverUrl: getEnvVariable("LIVEKIT_SERVER_URL"),
    apiKey: getEnvVariable("LIVEKIT_API_KEY"),
    apiSecret: getEnvVariable("LIVEKIT_API_SECRET"),
  },
  enableDocs: process.env.NODE_ENV === "development",
};
