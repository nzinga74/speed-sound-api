import { authenticateRoutes } from "./authenticate.routes";
import { userRoutes } from "./user.routes";
import { albumRoutes } from "./album.routes";
import { Router } from "express";

const routes = Router();
routes.use("/users", userRoutes);
routes.use("/session", authenticateRoutes);
routes.use("/album", albumRoutes);

export { routes };
