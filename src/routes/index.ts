import { authenticateRoutes } from "./authenticate.routes";
import { userRoutes } from "./user.routes";
import { albumRoutes } from "./album.routes";
import { Router } from "express";
import { videoRoutes } from "./video.routes";
import { followerRoutes } from "./follower.routes";

const routes = Router();
routes.use("/users", userRoutes);
routes.use("/session", authenticateRoutes);
routes.use("/album", albumRoutes);
routes.use("/video", videoRoutes);
routes.use("/follower", followerRoutes);

export { routes };
