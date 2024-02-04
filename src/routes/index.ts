import { authenticateRoutes } from "./authenticate.routes";
import { clientRoutes } from "./client.routes";
import { maintenanceRoute } from "./maintenance.routes";
import { propertyRouter } from "./property.routes";
import { userRoutes } from "./user.routes";
import { Router } from "express";

const routes = Router();
routes.use("/users", userRoutes);
routes.use("/session", authenticateRoutes);
routes.use("/clients", clientRoutes);
routes.use("/properties", propertyRouter);
routes.use("/maintenances", maintenanceRoute);
export { routes };
