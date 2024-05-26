import { Request, Response, json } from "express";
import { container } from "tsyringe";
import { CreateAlbumUseCase } from "./CreateAlbumUseCase";
import { ErrorConstants } from "@errors/ErrorConstants";
class CreateAlbumController {
  async handle(request: Request, response: Response) {
    const createAlbumUseCase = container.resolve(CreateAlbumUseCase);
    const { title, description, userId, categoryId } = request.body;
    const file = request.file;
    let cover = "";
    if (file) {
      cover = file.filename;
    } else {
      return response.status(400).json({
        message: ErrorConstants.FILE_UPLOAD_ERROR,
      });
    }

    console.log(file);
    try {
      const album = await createAlbumUseCase.execute({
        categoryId,
        cover,
        description,
        title,
        userId,
      });
      return response.status(200).json({
        data: album,
      });
    } catch (error: any) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}

export { CreateAlbumController };
