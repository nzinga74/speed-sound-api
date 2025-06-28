import { inject, injectable } from "tsyringe";
import { ErrorConstants } from "@errors/ErrorConstants";
import { IArtistRepository } from "@modules/artists/repositories/IArtistRepository";
import { Artist, ArtistUser } from "@modules/artists/models/Artist";
import { ICreateArtist } from "@modules/artists/dtos/ICreateArtist";

@injectable()
class DeleteArtistMemberUseCase {
  constructor(
    //@ts-ignore
    @inject("ArtistRepository")
    private artistRepository: IArtistRepository
  ) {}
  async execute(artistUserId: string): Promise<ArtistUser> {
    try {
      const artistMember = await this.artistRepository.deleteMember(artistUserId);
      return artistMember;
    } catch (error) {
      console.log(error);
      throw new Error(ErrorConstants.CREATE_USER_ERROR);
    }
  }
}

export { DeleteArtistMemberUseCase };
