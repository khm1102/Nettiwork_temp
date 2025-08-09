import { Server as HttpServer } from "http";
import { Server as SocketIOServer } from "socket.io";

export function initializeSockets(server: HttpServer): SocketIOServer {
  const io = new SocketIOServer(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  return io;
}
