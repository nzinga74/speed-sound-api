import { ICreateAlbumDTO } from "../dtos/ICreateAlbumDTO";
import { IFindAlbumDTO } from "../dtos/IFindAlbumDTO";
import { Album } from "../models/Album";
import { FollowedAlbum } from "../models/FollowedAlbum";

interface IAlbumRepository {
  createAlbum(data: ICreateAlbumDTO): Promise<Album>;
  listFollowedAlbum(followedId: string): Promise<FollowedAlbum[]>;
  findAlbums(filterAlbum: IFindAlbumDTO): Promise<Album[]>;
  totalAlbums(userId: string): Promise<number>;
}
export { IAlbumRepository };
