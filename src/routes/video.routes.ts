import { Router } from "express";
import multer from "multer";
import { CreateVideoController } from "@modules/videos/useCases/CreateVideo/CreateVideoController";
import uploadConfig from "@config/upload";
import { CreateVideoCategoryController } from "@modules/videos/useCases/CreateVideoCategory/CreateVideoCategoryController";
import { CreateVideoViewsController } from "@modules/videos/useCases/CreateVideoViews/CreateVideoViewsController";
import { ListMostVideoViewsController } from "@modules/videos/useCases/ListMostVideoViews/ListMostVideoViewsController";
import { ListFolowedVideoController } from "@modules/videos/useCases/ListFollowedVideo/ListFollowedVideoController";
import { ListVideoController } from "@modules/videos/useCases/ListVideo/ListVideoController";

const videoRoutes = Router();
const upload = uploadConfig.upload("tmp");
const uploadMulterMiddleware = multer(upload).fields([
  { name: "cover", maxCount: 1 },
  { name: "video", maxCount: 1 },
]);
const createVideoController = new CreateVideoController();
const createVideoCategoryController = new CreateVideoCategoryController();
const createVideoViewsController = new CreateVideoViewsController();
const listMostVideoViewsController = new ListMostVideoViewsController();
const listFolowedVideoController = new ListFolowedVideoController();
const listVideoController = new ListVideoController();
videoRoutes.post("/", uploadMulterMiddleware, createVideoController.handle);
videoRoutes.post("/category", createVideoCategoryController.handle);
videoRoutes.post("/video-views", createVideoViewsController.handle);
videoRoutes.post("/list", listVideoController.handle);
videoRoutes.get("/followed-video", listFolowedVideoController.handle);
videoRoutes.get(
  "/video-views/most-viewed",
  listMostVideoViewsController.handle
);
export { videoRoutes };
