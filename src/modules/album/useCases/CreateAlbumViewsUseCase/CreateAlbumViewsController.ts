import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAlbumViewsUseCase } from "./CreateAlbumViewsUseCase";
class CreateAlbumViewsController {
  async handle(request: Request, response: Response) {
    const { albumId, userId } = request.body;
    const createAlbumViewUseCase = container.resolve(CreateAlbumViewsUseCase);
    try {
      const albumView = await createAlbumViewUseCase.execute({
        albumId,
        userId,
      });
      return response.status(200).json({
        data: albumView,
      });
    } catch (error: any) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}
export { CreateAlbumViewsController };
