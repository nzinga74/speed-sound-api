import { Request, Response } from "express";
import { CreateUserFollowersUseCase } from "./CreateUserFollowersUseCase";
import { container } from "tsyringe";
class CreateUserFollowerController {
  async handle(request: Request, response: Response) {
    try {
      const { userId, followerId } = request.body;
      const createUserFollowersUseCase = container.resolve(
        CreateUserFollowersUseCase
      );
      const follower = await createUserFollowersUseCase.execute({
        userId,
        followerId,
      });
      return response.status(200).json({
        data: follower,
      });
    } catch (error: any) {
      return response.status(200).json({
        data: error.message,
      });
    }
  }
}
export { CreateUserFollowerController };
