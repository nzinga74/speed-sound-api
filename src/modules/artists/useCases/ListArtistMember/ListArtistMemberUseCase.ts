import { inject, injectable } from "tsyringe";
import { ErrorConstants } from "@errors/ErrorConstants";
import { IArtistRepository } from "@modules/artists/repositories/IArtistRepository";
import { ArtistUser } from "@modules/artists/models/Artist";
import { IListArtistMember } from "@modules/artists/dtos/IListArtistMember";

@injectable()
class ListArtistMemberUseCase {
  constructor(
    //@ts-ignore
    @inject("ArtistRepository")
    private artistRepository: IArtistRepository
  ) {}
  async execute({
    artistId,
    memberId,
    role,
  }: IListArtistMember): Promise<ArtistUser[]> {
    try {
      const artistMember = await this.artistRepository.listArtists({
        artistId,
        memberId,
        role,
      });
      return artistMember;
    } catch (error) {
      console.log(error);
      throw new Error(ErrorConstants.LIST_ARTIST_MEMBER_ERROR);
    }
  }
}

export { ListArtistMemberUseCase };
