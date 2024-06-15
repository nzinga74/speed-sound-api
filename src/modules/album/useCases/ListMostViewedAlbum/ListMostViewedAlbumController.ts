import { Request, Response } from "express";
import { ListMostViewedAlbumUseCase } from "./ListMostViewedAlbumUseCase";
import { container } from "tsyringe";
class ListMostViewedAlbumController {
  async handle(request: Request, response: Response) {
    try {
      const { limit } = request.query;
      const limitUser = parseInt(limit as string);

      const listMostViewedAlbumUseCase = container.resolve(
        ListMostViewedAlbumUseCase
      );
      const mostViewedAlbuns = await listMostViewedAlbumUseCase.execute(10);
      return response.status(200).json({
        data: mostViewedAlbuns,
      });
    } catch (error: any) {
      return response.status(400).json({
        data: error.message,
      });
    }
  }
}
export { ListMostViewedAlbumController };
