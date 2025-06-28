import { ICreateArtist } from "../dtos/ICreateArtist";
import { ICreateArtistMember } from "../dtos/ICreateArtistMember";
import { IListArtistMember } from "../dtos/IListArtistMember";
import { Artist, ArtistUser } from "../models/Artist";

interface IArtistRepository {
  create(data: ICreateArtist): Promise<Artist>;
  addMember(data: ICreateArtistMember): Promise<ArtistUser>;
  deleteMember(artistUserId: string): Promise<ArtistUser>;
  listArtists(data: IListArtistMember): Promise<ArtistUser[]>;
}
export { IArtistRepository };
