import { CreateAlbumController } from "@modules/album/useCases/CreateAlbumUseCase/CreateAlbumController";
import { Router } from "express";
import uploadConfig from "@config/upload";
import multer from "multer";
import { CreateMusicContoller } from "@modules/album/useCases/CreateMusicUseCase/CreateMusicController";
import { CreateAlbumCategoryController } from "@modules/album/useCases/CreateCategoryUseCase/CreateAlbumCategoryController";
import { ListMusicController } from "@modules/album/useCases/ListMusicUseCase/ListMusicController";
import { CreateAlbumViewsController } from "@modules/album/useCases/CreateAlbumViewsUseCase/CreateAlbumViewsController";
import { ListMostViewedAlbumController } from "@modules/album/useCases/ListMostViewedAlbum/ListMostViewedAlbumController";
const albumRoutes = Router();
const upload = uploadConfig.upload("tmp/album/cover");
const createAlbumController = new CreateAlbumController();
const createMusicUseController = new CreateMusicContoller();
const createAlbumCategoryController = new CreateAlbumCategoryController();
const listMusicController = new ListMusicController();
const createAlbumViewsController = new CreateAlbumViewsController();
const listMostViewedAlbumController = new ListMostViewedAlbumController();
albumRoutes.post(
  "/",
  multer(upload).single("cover"),
  createAlbumController.handle
);
albumRoutes.post(
  "/music",
  multer(upload).single("audio"),
  createMusicUseController.handle
);
albumRoutes.get("/music/:albumId", listMusicController.handle);
albumRoutes.post("/category", createAlbumCategoryController.handle);
albumRoutes.post("/albumViews", createAlbumViewsController.handle);
albumRoutes.get(
  "/albumViews/most-viewed",
  listMostViewedAlbumController.handle
);
export { albumRoutes };
