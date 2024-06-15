import { Request, Response } from "express";
import { ListMostFollowedUsersUseCase } from "./ListMostFollowedUsersUseCase";
import { container } from "tsyringe";
class ListMostFollowedUsersController {
  async handle(request: Request, response: Response) {
    try {
      const { limit } = request.query;
      const limitUser = parseInt(limit as string);

      const listMostFollowedUsers = container.resolve(
        ListMostFollowedUsersUseCase
      );
      const mostFollowedUsers = await listMostFollowedUsers.execute(10);
      return response.status(200).json({
        data: mostFollowedUsers,
      });
    } catch (error: any) {
      return response.status(400).json({
        data: error.message,
      });
    }
  }
}
export { ListMostFollowedUsersController };
