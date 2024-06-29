import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListFollowedVideoUseCase } from "./ListFollowedVideoUseCase";
class ListFolowedVideoController {
  async handle(request: Request, response: Response) {
    try {
      const { userId } = request.body;
      const listFollowedVideoUseCase = container.resolve(
        ListFollowedVideoUseCase
      );
      const FollowedVideos = await listFollowedVideoUseCase.execute(userId);
      return response.status(200).json({
        data: FollowedVideos,
      });
    } catch (error: any) {
      return response.status(400).json({
        data: error.message,
      });
    }
  }
}
export { ListFolowedVideoController };
