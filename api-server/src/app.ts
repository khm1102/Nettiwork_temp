import express, { Application } from "express";
import routes from "./routes";
import { errorHandler } from "./middlewares/error.middleware";
import { setupSwagger } from "./swagger";
import { config } from "./config";

const app: Application = express();
app.set("trust proxy", config.vpcCidr);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/health-check", (req, res) => {
  res.send({ ok: true });
});

app.use("/api", routes);

app.use(errorHandler);

setupSwagger(app);

export default app;
