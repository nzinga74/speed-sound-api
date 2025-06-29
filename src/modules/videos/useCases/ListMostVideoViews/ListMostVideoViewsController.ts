import { Request, Response } from "express";
import { ListMostVideoViewsUseCase } from "./ListMostVideoViewsUseCase";
import { container } from "tsyringe";
class ListMostVideoViewsController {
  async handle(request: Request, response: Response) {
    try {
      const { limit } = request.query;
      let limitVideo = 10;
      if (limit != undefined) {
        limitVideo = parseInt(limit as string);
      }

      const listMostvideoView = container.resolve(ListMostVideoViewsUseCase);
      const mostVideoView = await listMostvideoView.execute(limitVideo);
      return response.status(200).json({
        data: mostVideoView,
      });
    } catch (error: any) {
      return response.status(400).json({
        data: error.message,
      });
    }
  }
}
export { ListMostVideoViewsController };
