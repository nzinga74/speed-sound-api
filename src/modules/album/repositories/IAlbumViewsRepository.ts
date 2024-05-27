import { ICreateAlbumViewsDTO } from "../dtos/ICreateAlbumViewsDTO";
import { IFindAlbumViewsByUserAndAlbumDTO } from "../dtos/IFindAlbumViewsByUserAndAlbumDTO";
import { AlbumView } from "../models/AlbumView";

interface IAlbumViewsRepository {
  create(data: ICreateAlbumViewsDTO): Promise<AlbumView>;
  findByUserAndAlbum(
    data: IFindAlbumViewsByUserAndAlbumDTO
  ): Promise<AlbumView | null>;
}
export { IAlbumViewsRepository };
