import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPlaylistUseCase } from "./ListPlaylistUseCase";
class ListPlaylistController {
  async handle(request: Request, response: Response) {
    const { userId } = request.body;
    try {
      const listPlaylistUseCase = container.resolve(ListPlaylistUseCase);
      const playlists = await listPlaylistUseCase.execute(userId);
      return response.status(200).json({
        data: playlists,
      });
    } catch (error: any) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}
export { ListPlaylistController };
