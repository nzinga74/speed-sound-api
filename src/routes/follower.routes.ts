import { CreateUserFollowerController } from "@modules/users/useCases/CreateUserFollowers/CreateUserFollowersController";
import { DeletUserFollowerController } from "@modules/users/useCases/DeleteUserFollowers/DeleteUserFollowersController";
import { ListMostFollowedUsersController } from "@modules/users/useCases/ListMostFollowedUsers/ListMostFollowedUsersController";
import { ListUserFollowerController } from "@modules/users/useCases/ListUserFollowers/ListUserFollowersController";
import { Router } from "express";

const followerRoutes = Router();
const createUserFollowersUseCase = new CreateUserFollowerController();
const deleteUserFollowersController = new DeletUserFollowerController();
const listUserFollowerController = new ListUserFollowerController();
const listMostFollowedUsersController = new ListMostFollowedUsersController();
followerRoutes.post("/", createUserFollowersUseCase.handle);
followerRoutes.get("/", listUserFollowerController.handle);
followerRoutes.get("/most-followed", listMostFollowedUsersController.handle);
followerRoutes.delete("/", deleteUserFollowersController.handle);
export { followerRoutes };
