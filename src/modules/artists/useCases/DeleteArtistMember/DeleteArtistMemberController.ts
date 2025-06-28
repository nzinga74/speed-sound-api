import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteArtistMemberUseCase } from "./DeleteArtistMemberUseCase";

class DeleteArtistMemberController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { artistUserId } = request.body;
      const createArtistMemberUseCase = container.resolve(
        DeleteArtistMemberUseCase
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

export { DeleteArtistMemberController };
