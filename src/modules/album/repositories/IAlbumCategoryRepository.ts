import { ICreateAlbumCategoryDTO } from "../dtos/ICreateAlbumCategoryDTO";
import { AlbumCategory } from "../models/AlbumCategory";

interface IAlbumCategoryRepository {
  create(data: ICreateAlbumCategoryDTO): Promise<AlbumCategory>;
}

export { IAlbumCategoryRepository };
