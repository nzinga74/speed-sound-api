import { ICreateAlbumViewsDTO } from "../dtos/ICreateAlbumViewsDTO";
import { IFindAlbumViewsByUserAndAlbumDTO } from "../dtos/IFindAlbumViewsByUserAndAlbumDTO";
import { AlbumView } from "../models/AlbumView";
import { MostViewedAlbum } from "../models/MostViewedAlbum";

interface IAlbumViewsRepository {
  create(data: ICreateAlbumViewsDTO): Promise<AlbumView>;
  listMostViewedAlbuns(limit: number): Promise<MostViewedAlbum[]>;
  findByUserAndAlbum(
    data: IFindAlbumViewsByUserAndAlbumDTO
  ): Promise<AlbumView | null>;
}
export { IAlbumViewsRepository };
