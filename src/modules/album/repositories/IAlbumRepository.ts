import { ICreateAlbumDTO } from "../dtos/ICreateAlbumDTO";
import { Album } from "../models/Album";

interface IAlbumRepository {
  createAlbum(data: ICreateAlbumDTO): Promise<Album>;
  listRecentAlbum(): Promise<Album[]>;
}
export { IAlbumRepository };
