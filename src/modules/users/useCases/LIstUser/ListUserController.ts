import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";
import { container } from "tsyringe";
class ListUserController {
  async handle(request: Request, response: Response) {
    try {
      const { userId } = request.body;

      const listUser = container.resolve(ListUserUseCase);
      const user = await listUser.execute(userId);
      return response.status(200).json({
        data: user,
      });
    } catch (error: any) {
      return response.status(400).json({
        data: error.message,
      });
    }
  }
}
export { ListUserController };
