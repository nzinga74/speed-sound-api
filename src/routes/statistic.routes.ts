import { FollowersStatisticController } from "@modules/statistics/useCases/FollowersStatistic/FollowersStatisticController";
import { ReviewStatisticController } from "@modules/statistics/useCases/ReviewStatistic/ReviewStatisticController";
import { Router } from "express";
const statisticRoutes = Router();
const reviewStatisticController = new ReviewStatisticController();
const followersStatisticController = new FollowersStatisticController();
statisticRoutes.post("/review", reviewStatisticController.handle);
statisticRoutes.post("/followers", followersStatisticController.handle);
export { statisticRoutes };
