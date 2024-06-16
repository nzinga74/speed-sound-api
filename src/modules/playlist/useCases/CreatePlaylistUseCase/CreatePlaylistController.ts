import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePlaylistUseCase } from "./CreatePlaylistUseCase";
class CreatePlaylistController {
  async handle(request: Request, response: Response) {
    const { name, userId } = request.body;
    try {
      const createPlaylistUseCase = container.resolve(CreatePlaylistUseCase);
      const playlist = await createPlaylistUseCase.execute({
        name,
        userId,
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
export { CreatePlaylistController };
