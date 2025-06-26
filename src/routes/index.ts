import { authenticateRoutes } from "./authenticate.routes";
import { userRoutes } from "./user.routes";
import { albumRoutes } from "./album.routes";
import { Router } from "express";
import { videoRoutes } from "./video.routes";
import { followerRoutes } from "./follower.routes";
import { playlistRoutes } from "./playlist.routes";
import { statisticRoutes } from "./statistic.routes";
import { searchRoutes } from "./search.routes";
import { radioRoutes } from "./radio.routes";
import { artistRoutes } from "./artist.routes";

const routes = Router();
routes.use("/users", userRoutes);
routes.use("/session", authenticateRoutes);
routes.use("/album", albumRoutes);
routes.use("/video", videoRoutes);
routes.use("/follower", followerRoutes);
routes.use("/playlist", playlistRoutes);
routes.use("/statistics", statisticRoutes);
routes.use("/search", searchRoutes);
routes.use("/radios", radioRoutes);
routes.use("/artists", artistRoutes);

export { routes };
