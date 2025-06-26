import { Router } from "express";
import uploadConfig from "@config/upload";
import { CreateArtistController } from "@modules/artists/useCases/CreateArtist/CreateArtistController";
import multer from "multer";

const artistRoutes = Router();
const upload = uploadConfig.upload("tmp");
const createArtistController = new CreateArtistController();

artistRoutes.post(
  "/",
  multer(upload).single("image"),
  createArtistController.handle
);
export { artistRoutes };
