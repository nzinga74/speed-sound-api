import { Request, Response } from "express";
import { container } from "tsyringe";
import { FollowerStatisticUseCase } from "./FollowersStatisticUseCase";
class FollowersStatisticController {
  async handle(request: Request, response: Response) {
    try {
      const { userId, year } = request.body;
      const followerStatisticUseCase = container.resolve(
        FollowerStatisticUseCase
      );
      const followersStatistics = await followerStatisticUseCase.execute(
        userId,
        year
      );
      return response.status(200).json({
        data: followersStatistics,
      });
    } catch (error: any) {
      return response.status(400).json({
        data: error.message,
      });
    }
  }
}
export { FollowersStatisticController };
