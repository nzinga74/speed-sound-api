import { Router } from "express";
import multer from "multer";
import { CreateVideoController } from "@modules/videos/useCases/CreateVideoController";
import uploadConfig from "@config/upload";
import { CreateVideoCategoryController } from "@modules/videos/useCases/CreateVideoCategoryController";

const videoRoutes = Router();
const upload = uploadConfig.upload("tmp/album/cover");
const uploadMulterMiddleware = multer(upload).fields([
  { name: "cover", maxCount: 1 },
  { name: "video", maxCount: 1 },
]);
const createVideoController = new CreateVideoController();
const createVideoCategoryController = new CreateVideoCategoryController();
videoRoutes.post("/", uploadMulterMiddleware, createVideoController.handle);
videoRoutes.post("/category", createVideoCategoryController.handle);
export { videoRoutes };
