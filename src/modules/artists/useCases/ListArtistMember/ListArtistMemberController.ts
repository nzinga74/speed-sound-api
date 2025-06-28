import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListArtistMemberUseCase } from "./ListArtistMemberUseCase";
import { Role } from "@prisma/client";

class ListArtistMemberController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      let { memberId, artistId, role } = request.query;
      const listArtistMemberUseCase = container.resolve(
        ListArtistMemberUseCase
      );
      memberId = memberId as string;
      artistId = artistId as string;
      role = role as Role;

      const artistMembers = await listArtistMemberUseCase.execute({
        memberId,
        artistId,
        role,
      });
      return response.status(200).json({ data: artistMembers });
    } catch (error) {
      //@ts-ignore
      return response.status(400).json({ message: error.message });
    }
  }
}

export { ListArtistMemberController };
