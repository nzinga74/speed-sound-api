import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePlaylistMusicUseCase } from "./CreatePlaylistMusicUseCase";
class CreatePlaylistMusicController {
  async handle(request: Request, response: Response) {
    const { playlistId, musicId } = request.body;
    try {
      const createPlaylistMusicUseCase = container.resolve(
        CreatePlaylistMusicUseCase
      );
      const playlist = await createPlaylistMusicUseCase.execute({
        musicId,
        playlistId,
      });
      return response.status(200).json({
        data: playlist,
      });
    } catch (error: any) {
      return response.status(400).json({
        data: error.message,
      });
    }
  }
}
export { CreatePlaylistMusicController };
