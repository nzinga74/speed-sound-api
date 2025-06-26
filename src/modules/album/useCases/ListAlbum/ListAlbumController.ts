import { Request, Response } from "express";
import { ListAlbumUseCase } from "./ListAlbumUseCase";
import { container } from "tsyringe";

class ListAlbumController {
  async handle(request: Request, response: Response) {
    try {
      const { albumId, categoryId, userId } = request.body;
      const listAlbumUseCase = container.resolve(ListAlbumUseCase);
      const albums = await listAlbumUseCase.execute({
        albumId,
        categoryId,
        userId,
      });
      return response.status(200).json({
        data: albums,
      });
    } catch (error: any) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}
export { ListAlbumController };
