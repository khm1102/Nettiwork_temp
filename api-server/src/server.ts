import "reflect-metadata";
import http from "http";
import app from "./app";
import { config } from "./config";
import { initializeSockets } from "./sockets";
import { logger } from "@nettiwork/common";

const port = config.port;
const server = http.createServer(app);

initializeSockets(server);

server.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
