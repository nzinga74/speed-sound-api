import { authenticateRoutes } from "./authenticate.routes";
import { userRoutes } from "./user.routes";
import { Router } from "express";

const routes = Router();
routes.use("/users", userRoutes);
routes.use("/session", authenticateRoutes);

export { routes };
