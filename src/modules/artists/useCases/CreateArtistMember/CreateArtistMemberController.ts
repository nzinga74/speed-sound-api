import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateArtistMemberUseCase } from "./CreateArtistMemberUseCase";

class CreateArtistMemberController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { memberId, artistId, role } = request.body;
      const createArtistMemberUseCase = container.resolve(
        CreateArtistMemberUseCase
      );
      const artistMember = await createArtistMemberUseCase.execute({
        memberId,
        artistId,
        role,
      });
      return response.status(200).json({ data: artistMember });
    } catch (error) {
      //@ts-ignore
      return response.status(400).json({ message: error.message });
    }
  }
}

export { CreateArtistMemberController };
