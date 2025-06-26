import { CreateUserController } from "@modules/accounts/useCases/CreateUser/CreateUserController";
import { CreateUserProfileController } from "@modules/users/useCases/CreateUserProfile/CreateUserProfileController";
import { Router } from "express";
import uploadConfig from "@config/upload";
import multer from "multer";
import { ListUserController } from "@modules/users/useCases/LIstUser/ListUserController";

const userRoutes = Router();
const upload = uploadConfig.upload("tmp");

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const createUserProfileController = new CreateUserProfileController();
userRoutes.post("/", createUserController.handle);
userRoutes.post(
  "/profile",
  multer(upload).single("image"),
  createUserProfileController.handle
);
userRoutes.post("/list", listUserController.handle);

export { userRoutes };
