import { Router } from "express";
import multer from "multer";
import { CreateVideoController } from "@modules/videos/useCases/CreateVideo/CreateVideoController";
import uploadConfig from "@config/upload";
import { CreateVideoCategoryController } from "@modules/videos/useCases/CreateVideoCategory/CreateVideoCategoryController";
import { CreateVideoViewsController } from "@modules/videos/useCases/CreateVideoViews/CreateVideoViewsController";
import { ListMostVideoViewsController } from "@modules/videos/useCases/ListMostVideoViews/ListMostVideoViewsController";

const videoRoutes = Router();
const upload = uploadConfig.upload("tmp/album/cover");
const uploadMulterMiddleware = multer(upload).fields([
  { name: "cover", maxCount: 1 },
  { name: "video", maxCount: 1 },
]);
const createVideoController = new CreateVideoController();
const createVideoCategoryController = new CreateVideoCategoryController();
const createVideoViewsController = new CreateVideoViewsController();
const listMostVideoViewsController = new ListMostVideoViewsController();
videoRoutes.post("/", uploadMulterMiddleware, createVideoController.handle);
videoRoutes.post("/category", createVideoCategoryController.handle);
videoRoutes.post("/video-views", createVideoViewsController.handle);
videoRoutes.get(
  "/video-views/most-viewed",
  listMostVideoViewsController.handle
);
export { videoRoutes };
