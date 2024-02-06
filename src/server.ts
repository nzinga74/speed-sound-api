import express from "express";
import SwaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import "reflect-metadata";
import "./shared/container";
import { routes } from "routes";
import cors from "cors";
const app = express();
app.use(express.json());
app.use("/static", express.static(__dirname + "/tmp"));
app.use(cors({ origin: ["http://localhost:3000", "http://127.0.0.1:3000"] }));
app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerFile));
app.use(routes);
app.listen(3333, () => {
  console.log("Server started");
});
