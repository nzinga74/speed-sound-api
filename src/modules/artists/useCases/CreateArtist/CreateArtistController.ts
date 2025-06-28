import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateArtistUseCase } from "./CreateArtistUseCase";

class CreateArtistController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, realName, biography, musicGenreId, userId } = request.body;
      let fileName = request.file?.filename;
      const image = fileName == undefined ? "" : fileName;
      const createArtistUseCase = container.resolve(CreateArtistUseCase);
      const createArtist = await createArtistUseCase.execute({
        name,
        realName,
        biography,
        musicGenreId,
        image,
        userId,
      });
      return response.status(200).json({ data: createArtist });
    } catch (error) {
      //@ts-ignore
      return response.status(400).json({ message: error.message });
    }
  }
}

export { CreateArtistController };
