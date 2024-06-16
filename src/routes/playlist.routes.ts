import { CreatePlaylistMusicController } from "@modules/playlist/useCases/CreatePlaylistMusicUseCase/CreatePlaylistMusicController";
import { CreatePlaylistController } from "@modules/playlist/useCases/CreatePlaylistUseCase/CreatePlaylistController";
import { ListPlaylistMusicController } from "@modules/playlist/useCases/ListPlaylistMusicUseCase/ListPlaylistMusicController";
import { ListPlaylistController } from "@modules/playlist/useCases/ListPlaylistUseCase/ListPlaylistController";
import { Router } from "express";

const playlistRoutes = Router();
const createPlaylistController = new CreatePlaylistController();
const createPlaylistMusicController = new CreatePlaylistMusicController();
const listPlaylistMusicController = new ListPlaylistMusicController();
const listPlaylistController = new ListPlaylistController();
playlistRoutes.post("/", createPlaylistController.handle);
playlistRoutes.get("/", listPlaylistController.handle);
playlistRoutes.get("/music/:playlistId", listPlaylistMusicController.handle);
playlistRoutes.post("/music", createPlaylistMusicController.handle);
export { playlistRoutes };
