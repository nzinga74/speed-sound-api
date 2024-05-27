import { ErrorConstants } from "@errors/ErrorConstants";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateVideoUseCase } from "./CreateVideoUseCase";
class CreateVideoController {
  async handle(request: Request, response: Response) {
    const { title, description, categoryId, userId } = request.body;
    const createVideoUseCase = container.resolve(CreateVideoUseCase);
    const files: any = request.files;
    try {
      if (!files || !files.cover || !files.video) {
        return response.status(404).json({
          message: ErrorConstants.FILE_UPLOAD_ERROR,
        });
      }
      const cover = files.cover[0].filename;
      const videoFile = files.video[0].filename;
      const video = await createVideoUseCase.execute({
        categoryId,
        cover,
        description,
        title,
        userId,
        video: videoFile,
      });
      return response.status(200).json({ data: video });
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
export { CreateVideoController };
