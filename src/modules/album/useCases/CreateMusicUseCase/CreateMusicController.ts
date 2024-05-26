import { ErrorConstants } from "@errors/ErrorConstants";
import { Request, Response } from "express";
import { CreateMusicUseCase } from "./CreateMusicUseCase";
import { container } from "tsyringe";
class CreateMusicContoller {
  async handle(request: Request, response: Response) {
    const { albumId, title, duration } = request.body;
    const createMusicUseCasen = container.resolve(CreateMusicUseCase);
    const file = request.file;
    if (!file) {
      return response.status(404).json({
        message: ErrorConstants.FILE_UPLOAD_ERROR,
      });
    }
    try {
      const audio = file.filename;
      const music = await createMusicUseCasen.execute({
        albumId,
        title,
        duration,
        audio,
      });
      return response.status(200).json({
        data: music,
      });
    } catch (error: any) {
      return response.status(500).json({
        message: error.message,
      });
    }
  }
}
export { CreateMusicContoller };
