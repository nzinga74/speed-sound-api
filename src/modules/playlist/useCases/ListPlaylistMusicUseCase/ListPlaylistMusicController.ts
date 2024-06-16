import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPLaylistMusicUseCase } from "./ListPlaylistMusicUseCase";
class ListPlaylistMusicController {
  async handle(request: Request, response: Response) {
    const { playlistId } = request.params;
    try {
      const listPLaylistMusicUseCase = container.resolve(
        ListPLaylistMusicUseCase
      );
      const playlist = await listPLaylistMusicUseCase.execute(playlistId);
      return response.status(200).json({
        data: playlist,
      });
    } catch (error: any) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}
export { ListPlaylistMusicController };
