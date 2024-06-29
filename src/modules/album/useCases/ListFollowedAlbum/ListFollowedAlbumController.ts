import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListFollowedAlbumUseCase } from "./ListFollowedAlbumUseCase";
class ListFolowedAlbumController {
  async handle(request: Request, response: Response) {
    try {
      const { userId } = request.body;
      const listFollowedAlbumUseCase = container.resolve(
        ListFollowedAlbumUseCase
      );
      const FollowedAlbuns = await listFollowedAlbumUseCase.execute(userId);
      return response.status(200).json({
        data: FollowedAlbuns,
      });
    } catch (error: any) {
      return response.status(400).json({
        data: error.message,
      });
    }
  }
}
export { ListFolowedAlbumController };
