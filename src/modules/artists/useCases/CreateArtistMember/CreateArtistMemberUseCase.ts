import { inject, injectable } from "tsyringe";
import { ErrorConstants } from "@errors/ErrorConstants";
import { IArtistRepository } from "@modules/artists/repositories/IArtistRepository";
import { ArtistUser } from "@modules/artists/models/Artist";
import { ICreateArtistMember } from "@modules/artists/dtos/ICreateArtistMember";

@injectable()
class CreateArtistMemberUseCase {
  constructor(
    //@ts-ignore
    @inject("ArtistRepository")
    private artistRepository: IArtistRepository
  ) {}
  async execute({
    artistId,
    memberId,
    role,
  }: ICreateArtistMember): Promise<ArtistUser> {
    try {
      const artistMember = await this.artistRepository.addMember({
        artistId,
        memberId,
        role,
      });
      return artistMember;
    } catch (error) {
      console.log(error);
      throw new Error(ErrorConstants.CREATE_USER_ERROR);
    }
  }
}

export { CreateArtistMemberUseCase };
