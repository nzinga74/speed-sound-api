import { Request, Response } from "express";
import { DeleteUserFolloweUseCase } from "./DeleteUserFollowersUseCase";
import { container } from "tsyringe";
class DeletUserFollowerController {
  async handle(request: Request, response: Response) {
    try {
      const { userId, followerId } = request.body;
      const deleteUserFolloweUseCase = container.resolve(
        DeleteUserFolloweUseCase
      );
      const deletedFollower = await deleteUserFolloweUseCase.execute({
        userId,
        followerId,
      });
      return response.status(200).json({
        data: deletedFollower,
      });
    } catch (error: any) {
      return response.status(200).json({
        data: error.message,
      });
    }
  }
}
export { DeletUserFollowerController };
