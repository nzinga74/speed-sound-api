import { ICreateAlbumDTO } from "../dtos/ICreateAlbumDTO";
import { Album } from "../models/Album";
import { FollowedAlbum } from "../models/FollowedAlbum";

interface IAlbumRepository {
  createAlbum(data: ICreateAlbumDTO): Promise<Album>;
  listFollowedAlbum(followedId: string): Promise<FollowedAlbum[]>;
}
export { IAlbumRepository };
