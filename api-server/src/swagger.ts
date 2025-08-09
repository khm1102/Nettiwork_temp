import { Application } from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";
import { config } from "./config";
import fs from "fs";
import { logger } from "@nettiwork/common";

/**
 * Swagger 설정
 *
 * @param app server application
 */
export function setupSwagger(app: Application): void {
  if (!config.enableDocs) {
    return;
  }

  const swaggerPath = path.join(__dirname, "docs", "swagger.yaml");

  if (!fs.existsSync(swaggerPath)) {
    logger.info("swagger.yaml not found. Swagger document has been disabled.");
    return;
  }
  const swaggerDocument = YAML.load(swaggerPath);

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
