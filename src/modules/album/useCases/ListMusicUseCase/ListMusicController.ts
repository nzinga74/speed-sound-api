import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListMusicUseCase } from "./ListMusicUseCase";
class ListMusicController {
  async handle(request: Request, response: Response) {
    const { albumId } = request.params;
    console.log(albumId);
    const listMusicUseCase = container.resolve(ListMusicUseCase);

    try {
      const musics = await listMusicUseCase.execute(albumId);
      return response.status(200).json({
        data: musics,
      });
    } catch (error: any) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}

export { ListMusicController };
