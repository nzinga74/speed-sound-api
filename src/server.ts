import express from "express";
import SwaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import "reflect-metadata";
import "./shared/container";
import { routes } from "routes";

const app = express();
app.use(express.json());
app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerFile));
app.use(routes);
app.listen(3333, () => {
  console.log("Server started");
});
