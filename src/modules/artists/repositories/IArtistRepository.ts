import { ICreateArtist } from "../dtos/ICreateArtist";
import { ICreateArtistMember } from "../dtos/ICreateArtistMember";
import { Artist, ArtistUser } from "../models/Artist";

interface IArtistRepository {
  create(data: ICreateArtist): Promise<Artist>;
  addMember(data: ICreateArtistMember): Promise<ArtistUser>;
}
export { IArtistRepository };
