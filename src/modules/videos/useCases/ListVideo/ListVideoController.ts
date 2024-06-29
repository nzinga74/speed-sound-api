import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListVideoUseCase } from "./ListVideoUseCase";
class ListVideoController {
  async handle(request: Request, response: Response) {
    try {
      const { videoId } = request.params;
      const listVideoUseCase = container.resolve(ListVideoUseCase);
      const video = await listVideoUseCase.execute(videoId);
      return response.status(200).json({
        data: video,
      });
    } catch (error: any) {
      return response.status(400).json({
        data: error.message,
      });
    }
  }
}
export { ListVideoController };
