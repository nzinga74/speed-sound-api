import { Request, Response } from "express";
import { ListUserFollowersUseCase } from "./ListUserFollowersUseCase";
import { container } from "tsyringe";
class ListUserFollowerController {
  async handle(request: Request, response: Response) {
    try {
      let { userId, followerId } = request.query;
      userId = userId as string;
      followerId = followerId as string;
      const listUserFolloweUseCase = container.resolve(
        ListUserFollowersUseCase
      );
      const followers = await listUserFolloweUseCase.execute({
        userId,
        followerId,
      });

      return response.status(200).json({
        data: followers,
      });
    } catch (error: any) {
      return response.status(200).json({
        data: error.message,
      });
    }
  }
}
export { ListUserFollowerController };
