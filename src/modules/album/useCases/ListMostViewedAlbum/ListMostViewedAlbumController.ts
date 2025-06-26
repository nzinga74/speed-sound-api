import { Request, Response } from "express";
import { ListMostViewedAlbumUseCase } from "./ListMostViewedAlbumUseCase";
import { container } from "tsyringe";
class ListMostViewedAlbumController {
  async handle(request: Request, response: Response) {
    try {
      const { limit } = request.query;
      let limitAlbum = 10;
      if (limit != undefined) {
        limitAlbum = parseInt(limit as string);
      }

      const listMostViewedAlbumUseCase = container.resolve(
        ListMostViewedAlbumUseCase
      );
      const mostViewedAlbuns = await listMostViewedAlbumUseCase.execute(
        limitAlbum
      );
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
