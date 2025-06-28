import { Router } from "express";
import uploadConfig from "@config/upload";
import { CreateArtistController } from "@modules/artists/useCases/CreateArtist/CreateArtistController";
import multer from "multer";
import { CreateArtistMemberController } from "@modules/artists/useCases/CreateArtistMember/CreateArtistMemberController";
import { ListArtistMemberController } from "@modules/artists/useCases/ListArtistMember/ListArtistMemberController";

const artistRoutes = Router();
const upload = uploadConfig.upload("tmp");
const createArtistController = new CreateArtistController();
const createArtistMemberController = new CreateArtistMemberController();
const listArtistMemberController = new ListArtistMemberController();
artistRoutes.post(
  "/",
  multer(upload).single("image"),
  createArtistController.handle
);

artistRoutes.post("/member", createArtistMemberController.handle);
artistRoutes.get("/member", listArtistMemberController.handle);

export { artistRoutes };
