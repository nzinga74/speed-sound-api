import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateVideoViewsUseCase } from "./CreateVideoViewsUseCase";
class CreateVideoViewsController {
  async handle(request: Request, response: Response) {
    try {
      const { userId, videoId } = request.body;
      const createVideoViewsUseCase = container.resolve(
        CreateVideoViewsUseCase
      );
      const videoViews = await createVideoViewsUseCase.execute({
        userId,
        videoId,
      });
      return response.status(200).json({
        data: videoViews,
      });
    } catch (error: any) {
      return response.status(400).json({
        data: error.message,
      });
    }
  }
}
export { CreateVideoViewsController };
