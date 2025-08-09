import { DataSource } from "typeorm";
import { User } from "./models/user.model";
import { config } from "./config";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: config.db.host,
  port: config.db.port,
  username: config.db.user,
  password: config.db.password,
  database: config.db.database,
  entities: [User],
  synchronize: false,
  migrations: ["./src/db/migrations/*.ts"],
});
